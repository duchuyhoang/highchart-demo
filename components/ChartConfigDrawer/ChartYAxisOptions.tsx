import React, { useMemo, useState } from "react";
import { ChartOptionsProps } from "./type";
import { cloneDeep, set } from "lodash";
import { Grid } from "@mui/material";
import { YAxisLabelsOptions } from "highcharts";
import ChartFontFamilyPicker from "../ChartFontFamilyPicker";
import ChartFontSizeSelector from "../ChartFontSizeSelector";
import ChartConfigSelect from "../ChartConfigSelect";
import ColorPicker from "../ColorPicker";
import ChartTextFormatter from "../ChartTextFormatter";
import ChartInputLabel from "./base";

interface ChartYAxisOptionsProps {
  value: ChartOptionsProps;
  onChange: (v: ChartOptionsProps) => void;
}

const ChartYAxisOptions = ({ onChange, value }: ChartYAxisOptionsProps) => {
  const [selectedIndex, setSelectedIndex] = useState("0");
  const { yAxisLabel } = value;

  const handleChange = (key: string, v: any) => {
    let path = `yAxisLabel[${selectedIndex}].${key}`;
    onChange(cloneDeep(set(value, path, v)));
  };

  const valuesMap: Record<string, YAxisLabelsOptions> = useMemo(() => {
    return yAxisLabel.reduce(
      (prev, cur, index) => ({
        ...prev,
        [index]: cur,
      }),
      {}
    ) as Record<string, YAxisLabelsOptions>;
  }, [yAxisLabel]);

  const selectedValue = valuesMap[selectedIndex] as YAxisLabelsOptions;

  return (
    <>
      <Grid
        container
        columnSpacing={"10px"}
        rowSpacing={"16px"}
        sx={{
          ".MuiInputBase-root": {
            width: "100%",
          },
        }}
      >
        <Grid item xs={12}>
          <ChartConfigSelect
            value={selectedIndex}
            label="Selecting"
            datas={yAxisLabel.map((v, index) => ({
              value: String(index),
              label: `Y${index + 1}`,
            }))}
            onChange={(e) => {
              setSelectedIndex(String(e.target.value));
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <ChartFontFamilyPicker
            label="Label font"
            value={selectedValue.style?.fontFamily!}
            onChange={(v) => {
              handleChange("style.fontFamily", v);
            }}
            usingStyle
          />
        </Grid>
        <Grid item xs={6}>
          <ChartFontSizeSelector
            label="Label font size"
            value={selectedValue.style?.fontSize!}
            onChange={(v) => {
              handleChange("style.fontSize", v);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ChartInputLabel>Legend format</ChartInputLabel>
          <ChartTextFormatter
            fontStyleValue={selectedValue.style?.fontStyle! as string}
            fontWeightValue={selectedValue.style?.fontWeight! as string}
            onChangeFontStyle={(v) => {
              handleChange("style.fontStyle", v);
            }}
            onChangeFontWeight={(v) => {
              handleChange("style.fontWeight", v);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ColorPicker
            value={selectedValue.style?.color!}
            label="Text color"
            onChange={(v) => {
              handleChange("style.color", v);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ChartYAxisOptions;

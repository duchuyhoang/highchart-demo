import React, { useMemo, useState } from "react";
import { ChartOptionsProps, ROTATION_VALUES } from "./type";
import { cloneDeep, set } from "lodash";
import { Grid, Typography } from "@mui/material";
import { XAxisLabelsOptions } from "highcharts";
import ChartFontFamilyPicker from "../ChartFontFamilyPicker";
import ChartFontSizeSelector from "../ChartFontSizeSelector";
import ChartConfigSelect from "../ChartConfigSelect";
import ColorPicker from "../ColorPicker";
import ChartTextFormatter from "../ChartTextFormatter";
import ChartInputLabel from "./base";

interface ChartXAxisProps {
  value: ChartOptionsProps;
  onChange: (v: ChartOptionsProps) => void;
}

const ChartXAxisOptions = ({ onChange, value }: ChartXAxisProps) => {
  const [selectedIndex, setSelectedIndex] = useState("0");
  const { xAxisLabel } = value;

  const handleChange = (key: string, v: any) => {
    let path = `xAxisLabel[${selectedIndex}].${key}`;
    onChange(cloneDeep(set(value, path, v)));
  };

  const valuesMap: Record<string, XAxisLabelsOptions> = useMemo(() => {
    return xAxisLabel.reduce(
      (prev, cur, index) => ({
        ...prev,
        [index]: cur,
      }),
      {}
    ) as Record<string, XAxisLabelsOptions>;
  }, [xAxisLabel]);

  const selectedValue = valuesMap[selectedIndex] as XAxisLabelsOptions;

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
            datas={xAxisLabel.map((v, index) => ({
              value: String(index),
              label: `X${index + 1}`,
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
        <Grid item xs={12}>
          <ChartConfigSelect
            value={selectedValue.rotation}
            label="Slant labels"
            datas={ROTATION_VALUES.map((v, index) => ({
              value: v.value,
              label: (
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: v.label,
                  }}
                ></Typography>
              ),
            }))}
            onChange={(e) => {
              handleChange("rotation", Number(e.target.value));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ChartXAxisOptions;

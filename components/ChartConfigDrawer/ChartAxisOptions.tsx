import { Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import { ChartOptionsProps, FONT_SIZE_OPTIONS } from "./type";
import ChartInputLabel from "./base";
import ChartFontFamilyPicker from "../ChartFontFamilyPicker";
import { cloneDeep, set } from "lodash";
import ChartFontSizeSelector from "../ChartFontSizeSelector";
import ColorPicker from "../ColorPicker";
import ChartTextFormatter from "../ChartTextFormatter";

interface ChartAxisOptionsProps {
  value: ChartOptionsProps;
  onChange: (v: ChartOptionsProps) => void;
}

const ChartAxisOptions = ({ onChange, value }: ChartAxisOptionsProps) => {
  const [selectedTitle, setSelectedTitle] = useState("chart_title");
  const { title, xAxis, yAxis, subtitle } = value.chartTitleOptions;

  const handleChangeValue = (propery: string, v: any) => {
    let path = "";
    if (selectedTitle === "chart_title")
      path = `chartTitleOptions.title.${propery}`;
    else if (selectedTitle === "chart_subTitle")
      path = `chartTitleOptions.subtitle.${propery}`;
    else {
      const [v, index] = selectedTitle.split("_");
      path = `chartTitleOptions.${
        v === "horizontal" ? "xAxis" : "yAxis"
      }[${index}].${propery}`;
    }
    onChange(cloneDeep(set(value, path, v)));
  };

  const options = useMemo(() => {
    return [
      {
        id: "chart_title",
        label: "Chart title",
        datas: title,
      },
      {
        id: "chart_subTitle",
        label: "Chart sub title",
        datas: subtitle,
      },
      ...xAxis.map((d, index) => ({
        id: `horizontal_${index}`,
        label: `Horizontal axis title ${index + 1}`,
        datas: d,
      })),
      ...yAxis.map((d, index) => ({
        id: `vertical_${index}`,
        label: `Vertical axis title ${index + 1}`,
        datas: d,
      })),
    ];
  }, [title, xAxis, yAxis, subtitle]);

  const optionsMap: any = useMemo(
    () =>
      options.reduce(
        (prev, option) => ({
          ...prev,
          [option.id]: option,
        }),
        {}
      ),
    [options]
  );

  const selectedValue = optionsMap[selectedTitle].datas;

  return (
    <Grid container columnSpacing={"10px"} rowSpacing={"16px"}>
      <Grid item xs={12}>
        <Select
          value={selectedTitle}
          onChange={(e: any) => {
            setSelectedTitle(e.target.value);
          }}
          size="small"
          sx={{
            "&": {
              width: "100%",
            },
          }}
        >
          {options.map((option) => (
            <MenuItem value={option.id} key={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={12} mt={"16px"}>
        <ChartInputLabel>Title text</ChartInputLabel>
        <TextField
          size="small"
          sx={{
            width: "100%",
          }}
          value={selectedValue.text}
          onChange={(e) => {
            handleChangeValue("text", e.target.value);
          }}
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          ".MuiInputBase-root": {
            width: "100%",
          },
        }}
        // mt={"16px"}
      >
        <ChartFontFamilyPicker
          value={selectedValue.style.fontFamily}
          onChange={(v) => {
            handleChangeValue("style.fontFamily", v);
          }}
          label={"Title font"}
          usingStyle
        />
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          ".MuiInputBase-root": {
            width: "100%",
          },
        }}
      >
        <ChartFontSizeSelector
          value={selectedValue.style.fontSize}
          onChange={(v) => {
            handleChangeValue("style.fontSize", v);
          }}
          label={"Title font size"}
        />
      </Grid>
      <Grid item xs={6}>
        <ChartInputLabel>Title format</ChartInputLabel>
        <ChartTextFormatter
          alignValue={selectedValue.align}
          fontStyleValue={selectedValue.style.fontStyle}
          fontWeightValue={selectedValue.style.fontWeight}
          onChangeAlignValue={(v) => {
            handleChangeValue("align", v);
          }}
          onChangeFontStyle={(v) => {
            handleChangeValue("style.fontStyle", v);
          }}
          onChangeFontWeight={(v) => {
            handleChangeValue("style.fontWeight", v);
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <ColorPicker
          value={selectedValue.style.color}
          onChange={(v) => {
            handleChangeValue("style.color", v);
          }}
          label={"Title text color"}
        />
      </Grid>
    </Grid>
  );
};

export default ChartAxisOptions;

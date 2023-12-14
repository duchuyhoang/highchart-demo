import React, { useMemo, useState } from "react";
import {
  CHART_TYPES,
  ChartOptionsProps,
  CHART_OPACITYS,
  SYMBOL_VALUES,
} from "./type";
import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import { SeriesOptionsType } from "highcharts";
import { cloneDeep, set } from "lodash";
import ColorPicker from "../ColorPicker";
import ChartInputLabel from "./base";
import ChartDashType from "../ChartDashType";
import ChartLineThickness from "../ChartLineThickness";
import ChartConfigSelect from "../ChartConfigSelect";

// CHART_TYPES

interface ChartSeriesLineConfigProps {
  value: SeriesOptionsType;
  onChange: (property: string, v: any) => void;
}
const ChartSeriesLineConfig = ({
  onChange,
  value,
}: ChartSeriesLineConfigProps) => {
  value;
  return (
    <>
      <Grid
        item
        xs={6}
        sx={{
          "& > .MuiBox-root": {
            width: "100%",
            ".color-container": {
              width: "100%",
              justifyContent: "space-between",
            },
          },
        }}
      >
        <ColorPicker
          label={"Line color"}
          value={(value as any).color}
          onChange={(color) => {
            onChange("color", color);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <ChartInputLabel>Line opacity</ChartInputLabel>
        <Select
          value={(value as any).opacity}
          size="small"
          onChange={(e) => {
            onChange("opacity", Number(e.target.value));
          }}
        >
          {CHART_OPACITYS.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={6}>
        <ChartDashType
          label="Line dash type"
          value={(value as any).dashStyle}
          onChange={(v) => {
            onChange("dashStyle", v);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <ChartLineThickness
          label="Line thickness"
          value={(value as any).lineWidth}
          onChange={(v) => {
            onChange("lineWidth", v);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <ChartConfigSelect
          label={"Symbol"}
          datas={SYMBOL_VALUES}
          value={(value as any).marker?.symbol}
          onChange={(e) => {
            onChange("marker.symbol", e.target.value);
          }}
        />
      </Grid>
    </>
  );
};

interface ChartSeriesOptionProps {
  value: ChartOptionsProps;
  onChange: (v: ChartOptionsProps) => void;
}
const ChartSeriesOption = ({ onChange, value }: ChartSeriesOptionProps) => {
  const { seriesOptions } = value;
  const [selectedSeri, setSelectedSeri] = useState("0");

  const seriesMap: Record<string, SeriesOptionsType> = useMemo(
    () =>
      seriesOptions.reduce(
        (prev, option, index) => ({
          ...prev,
          [String(index)]: option,
        }),
        {}
      ),
    [seriesOptions]
  );

  const selectedValue = seriesMap[selectedSeri];

  const handleChangeValue = (property: string, v: any) => {
    let path = `seriesOptions[${selectedSeri}].${property}`;

    onChange(cloneDeep(set(value, path, v)));
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ".MuiInputBase-root": {
            width: "100%",
          },
        }}
      >
        <Grid container columnSpacing={"10px"} rowSpacing={"12px"}>
          <Grid item xs={12} mt={"16px"}>
            <Select
              value={selectedSeri}
              size="small"
              onChange={(e: any) => {
                setSelectedSeri(e.target.value);
              }}
            >
              {seriesOptions.map((option, index) => (
                <MenuItem key={index} value={String(index)}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Typography my={"16px"} variant="h4">
            Format
          </Typography>
          <Grid item xs={12} mb={"8px"}>
            <Select
              value={selectedValue.type}
              size="small"
              onChange={(e: any) => {
                handleChangeValue("type", e.target.value);
              }}
            >
              {CHART_TYPES.map((option, index) => (
                <MenuItem key={index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          {selectedValue.type === "line" && (
            <ChartSeriesLineConfig
              value={selectedValue}
              onChange={handleChangeValue}
            />
          )}
        </Grid>
      </Box>
    </>
  );
};

export default ChartSeriesOption;

import React from "react";
import { CHART_OPACITYS, ChartOptionsProps, SYMBOL_VALUES } from "./type";
import { Box, Drawer, DrawerProps, Grid, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import ColorPicker from "../ColorPicker";
import ChartConfigSelect from "../ChartConfigSelect";
import { cloneDeep, set } from "lodash";
import ChartDashType from "../ChartDashType";
import ChartLineThickness from "../ChartLineThickness";

interface ConfigProps {
  value: ChartOptionsProps;
  changeValue: (property: string, v: any) => void;
  selectedSeri: string | null;
}

interface ChartSeriConfigDrawerProps extends DrawerProps {
  value: ChartOptionsProps;
  selectedSeri: string | null;
  handleChangeValue: (v: ChartOptionsProps) => void;
  setSeri: (v: any) => void;
}

const ChartSeriConfigLine = ({
  changeValue,
  value,
  selectedSeri,
}: ConfigProps) => {
  const { seriesAdditionalConfigs } = value;
  const [seriType, seriIndex, dataIndex] = selectedSeri?.split("_") || [];
  const selectedValue = seriesAdditionalConfigs[seriIndex]?.[dataIndex];

  const colorValue =
    selectedValue && selectedValue.color
      ? selectedValue.color
      : value.seriesOptions[Number(seriIndex)].color;

  const pointShape =
    selectedValue && selectedValue.marker?.symbol
      ? selectedValue.marker?.symbol
      : value.seriesOptions[Number(seriIndex)]?.marker?.symbol;

  return (
    <>
      <Grid item xs={6}>
        <ColorPicker
          label="Fill color"
          value={colorValue}
          onChange={(color) => {
            changeValue("color", color);
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <ChartConfigSelect
          label="Point shape"
          value={pointShape}
          onChange={(e) => {
            changeValue("marker.symbol", e.target.value);
          }}
          datas={SYMBOL_VALUES}
        />
      </Grid>
    </>
  );
};

const ChartSeriConfigColumn = ({
  changeValue,
  value,
  selectedSeri,
}: ConfigProps) => {
  const { seriesAdditionalConfigs } = value;
  const [seriType, seriIndex, dataIndex] = selectedSeri?.split("_") || [];
  const selectedValue = seriesAdditionalConfigs[seriIndex]?.[dataIndex];
  const colorValue =
    selectedValue && selectedValue.color
      ? selectedValue.color
      : value.seriesOptions[Number(seriIndex)].color;

  const borderColorValue =
    selectedValue && selectedValue.borderColor
      ? selectedValue.borderColor
      : value.seriesOptions[Number(seriIndex)].borderColor;

  const opacityValue =
    selectedValue && (selectedValue as any).opacity
      ? (selectedValue as any).opacity
      : value.seriesOptions[Number(seriIndex)].opacity;

  const dashStyleValue =
    selectedValue && (selectedValue as any).dashStyle
      ? (selectedValue as any).dashStyle
      : value.seriesOptions[Number(seriIndex)].dashStyle;

  const borderWidthValue =
    selectedValue && (selectedValue as any).borderWidth
      ? (selectedValue as any).borderWidth
      : value.seriesOptions[Number(seriIndex)].borderWidth;

  return (
    <>
      <Grid item xs={6}>
        <ColorPicker
          label="Fill color"
          value={colorValue}
          onChange={(color) => {
            changeValue("color", color);
          }}
        />
      </Grid>

      <Grid item xs={6}>
        <ChartConfigSelect
          label={"Fill opacity"}
          value={opacityValue}
          datas={CHART_OPACITYS}
          onChange={(e) => {
            changeValue("opacity", e.target.value);
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
      >
        <ColorPicker
          label="Line color"
          value={borderColorValue}
          onChange={(color) => {
            changeValue("borderColor", color);
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
      >
        <ChartLineThickness
          label="Line thickness"
          value={borderWidthValue || 1}
          onChange={(v) => {
            changeValue("borderWidth", Number(v));
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
      >
        <ChartDashType
          label="Line dash type"
          value={dashStyleValue}
          onChange={(v) => {
            changeValue("dashStyle", v);
          }}
        />
      </Grid>
    </>
  );
};

const ChartSeriConfigDrawer = ({
  value,
  handleChangeValue,
  setSeri,
  selectedSeri,
  ...rest
}: ChartSeriConfigDrawerProps) => {
  const { seriesAdditionalConfigs } = value;
  const [seriType, seriIndex, dataIndex] = selectedSeri?.split("_") || [];

  const changeValue = (pro: string, v: any) => {
    let path = `seriesAdditionalConfigs.${seriIndex}.${dataIndex}.${pro}`;
    handleChangeValue(cloneDeep(set(value, path, v)));
  };

  return (
    <Drawer
      {...rest}
      PaperProps={{
        sx: (theme) => ({
          padding: "32px",
          maxWidth: "400px",
          minWidth: "400px",
        }),
      }}
    >
      <Typography variant="h1">Change chart configs</Typography>
      <Box
        sx={{
          mt: "16px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => {
          setSeri(null);
        }}
      >
        <WestIcon />
        <Typography>Back</Typography>
      </Box>
      <Grid container mt={"16px"} columnSpacing={"10px"} rowSpacing={"16px"}>
        {seriType === "column" && (
          <ChartSeriConfigColumn
            value={value}
            changeValue={changeValue}
            selectedSeri={selectedSeri}
          />
        )}

        {seriType === "line" && (
          <ChartSeriConfigLine
            value={value}
            changeValue={changeValue}
            selectedSeri={selectedSeri}
          />
        )}
      </Grid>
    </Drawer>
  );
};

export default ChartSeriConfigDrawer;

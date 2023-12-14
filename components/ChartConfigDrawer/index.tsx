import { Drawer, Typography, DrawerProps, Box, Collapse } from "@mui/material";
import React, { useState } from "react";
import {
  ChartOptions,
  SeriesOptionsType,
  TitleOptions,
  XAxisTitleOptions,
  YAxisTitleOptions,
} from "highcharts";
import ChartTextFormatter from "../ChartTextFormatter";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ColorPicker from "../ColorPicker";

import {
  CHART_CONFIG_LABEL,
  CHART_CONFIG_LABELS,
  ChartConfigItemProps,
  ChartOptionsProps,
} from "./type";
import ChartStyleOptions from "./ChartStyleOptions";
import ChartAxisOptions from "./ChartAxisOptions";
import ChartSeriesOption from "./ChartSeriesOption";
import ChartLegendOptions from "./ChartLegendOptions";
import ChartXAxisOptions from "./ChartXAxisOptions";
import ChartYAxisOptions from "./ChartYAxisOptions";
import { Close } from "@mui/icons-material";
import ChartSeriConfigDrawer from "./ChartSeriConfigDrawer";

export const AUTO_VALUE = "auto";

const ChartConfigItem = ({
  configKey,
  value,
  onChange,
}: ChartConfigItemProps) => {
  return (
    <ChartOptionCollapse title={CHART_CONFIG_LABELS[configKey]}>
      {configKey === "CHART_STYLE" && (
        <ChartStyleOptions value={value} onChange={onChange} />
      )}
      {configKey === "CHART_AXIS" && (
        <ChartAxisOptions value={value} onChange={onChange} />
      )}
      {configKey === "CHART_SERIES" && (
        <ChartSeriesOption value={value} onChange={onChange} />
      )}
      {configKey === "CHART_LEGENDS" && (
        // value={value} onChange={onChange}
        <ChartLegendOptions value={value} onChange={onChange} />
      )}

      {configKey === "CHART_X_AXIS" && (
        <ChartXAxisOptions value={value} onChange={onChange} />
      )}

      {configKey === "CHART_Y_AXIS" && (
        <ChartYAxisOptions value={value} onChange={onChange} />
      )}
    </ChartOptionCollapse>
  );
};

const ChartOptionCollapse = ({
  title,
  children,
}: React.PropsWithChildren<{ title: string }>) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginTop: "24px",
        }}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <ArrowForwardIosIcon
          fontSize="small"
          sx={{
            transition: "all 0.3s",
            ...(isOpen && {
              transform: "rotate(90deg)",
            }),
          }}
        />
        <Typography variant="h6" ml={"8px"} fontWeight={400}>
          {title}
        </Typography>
      </Box>
      <Collapse
        in={isOpen}
        sx={{
          ".MuiCollapse-wrapperInner": {
            marginTop: "8px",
          },
        }}
      >
        {children}
      </Collapse>
    </>
  );
};

interface ChartTitleOptionsProps {
  title: TitleOptions;
  horizontalAxis: XAxisTitleOptions;
  verticalAxis: YAxisTitleOptions;
}

interface ChartConfigDrawerProps extends DrawerProps {
  chartOptions: ChartOptionsProps;
  selectedSeri: null | string;
  setSeletedSeri: (v: any) => void;
  handleClose: () => void;
  onChangeConfigs: (config: ChartOptionsProps) => void;
}

const ChartConfigDrawer = ({
  onChangeConfigs,
  chartOptions,
  handleClose,
  selectedSeri,
  setSeletedSeri,
  ...rest
}: ChartConfigDrawerProps) => {
  const isOpenSeriDrawer = Boolean(selectedSeri);
  return (
    <>
      <Drawer
        {...rest}
        PaperProps={{
          sx: (theme) => ({
            padding: "32px",
            maxWidth: "400px",
          }),
        }}
      >
        <Close
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: "16px",
            cursor: "pointer",
          }}
        />
        <Typography variant="h1" mt={"32px"}>
          Change chart configs
        </Typography>
        <Box
          sx={() => ({
            display: "flex",
            flexDirection: "column",
          })}
        >
          <ChartConfigItem
            configKey={"CHART_STYLE"}
            value={chartOptions}
            onChange={(c) => {
              onChangeConfigs(c);
            }}
          />

          <ChartConfigItem
            configKey={"CHART_AXIS"}
            value={chartOptions}
            onChange={(c) => {
              onChangeConfigs(c);
            }}
          />

          <ChartConfigItem
            configKey={"CHART_SERIES"}
            value={chartOptions}
            onChange={(c) => {
              onChangeConfigs(c);
            }}
          />

          <ChartConfigItem
            configKey={"CHART_LEGENDS"}
            value={chartOptions}
            onChange={(c) => {
              onChangeConfigs(c);
            }}
          />

          <ChartConfigItem
            configKey={"CHART_X_AXIS"}
            value={chartOptions}
            onChange={(c) => {
              onChangeConfigs(c);
            }}
          />

          <ChartConfigItem
            configKey={"CHART_Y_AXIS"}
            value={chartOptions}
            onChange={(c) => {
              onChangeConfigs(c);
            }}
          />

          {/* {seriesOptions.map((option, index) => (
          <ChartConfigItem key={`config_${index}`} option={option} />
        ))} */}
        </Box>
      </Drawer>
      {selectedSeri && (
        <ChartSeriConfigDrawer
          open={isOpenSeriDrawer}
          selectedSeri={selectedSeri}
          anchor="right"
          variant="persistent"
          value={chartOptions}
          handleChangeValue={(v) => {
            onChangeConfigs(v);
          }}
          onClose={() => {
            setSeletedSeri(null);
          }}
          setSeri={(v) => {
            setSeletedSeri(v);
          }}
        />
      )}
    </>
  );
};

export default ChartConfigDrawer;

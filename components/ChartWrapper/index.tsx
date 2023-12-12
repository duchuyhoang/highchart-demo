import HighchartsReact from "highcharts-react-official";
// import "./App.css";
import Highcharts, {
  AlignValue,
  DashStyleValue,
  OptionsLayoutValue,
  VerticalAlignValue,
} from "highcharts";
import { useEffect, useMemo, useRef, useState } from "react";
import { columnDatas, datas } from "../../datas";
import { shortenNumber } from "@/common/utils";
import data from "../../data.json";
import ChartConfigDrawer from "../ChartConfigDrawer";
import { SeriesOptionsType, ChartOptions } from "highcharts";
import { Box, Button } from "@mui/material";
import { CHART_DEFAULT_CONFIGS_PARAMS } from "@/common/configs";
import {
  ChartOptionsProps,
  FONT_FAMILYS,
  FONT_SIZE_OPTIONS,
  THICK_OPTIONS,
} from "../ChartConfigDrawer/type";

const ACTIVE_ADDRESS_COLOR = "rgb(247, 147, 26)";
const PRICE_COLOR = "rgb(51, 51, 51)";

const DEFAULT_FONT_STYLES = {
  color: CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_COLOR"],
  fontWeight: CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_WEIGHT"],
  fontStyle: CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_STYLE"],
  fontFamily: FONT_FAMILYS[0].style,
  fontSize: FONT_SIZE_OPTIONS[0].value,
};

const HOVER_OPACITY = 0.2;
const formattedDatas = data.map((d) => [new Date(d.time).getTime(), d.value]);
function Chart() {
  const [isOpen, setIsOpen] = useState(false);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  // const [chartLogScales, setChartLogScales] = useState({
  //   PRICE: "linear",
  //   ACTIVE: "linear",
  // });

  // const [seriesOptions, setSeriesOptions] = useState<Array<SeriesOptionsType>>();

  const [chartOptions, setChartOptions] = useState<ChartOptionsProps>({
    chartTitleOptions: {
      title: {
        text: "",
        align: "left",
        style: { ...DEFAULT_FONT_STYLES },
      },
      subtitle: {
        text: "",
        align: "left",
        style: { ...DEFAULT_FONT_STYLES },
      },
      xAxis: [
        {
          align: "middle",
          text: "",
          style: { ...DEFAULT_FONT_STYLES },
        },
      ],
      yAxis: [
        {
          align: "middle",
          text: "",
          style: { ...DEFAULT_FONT_STYLES },
        },
        {
          text: "",
          align: "middle",
          style: { ...DEFAULT_FONT_STYLES },
        },
      ],
    },
    chartStyles: {
      backgroundColor: CHART_DEFAULT_CONFIGS_PARAMS["BG"],
      borderWidth: 1,
      borderColor: CHART_DEFAULT_CONFIGS_PARAMS["CHART_BORDER_COLOR"],
      className: "san-serif",
      borderRadius: 20,
    },
    legendOptions: {
      align: CHART_DEFAULT_CONFIGS_PARAMS[
        "LEGEND_HORIZONTAL_ALIGN"
      ] as AlignValue,
      layout: CHART_DEFAULT_CONFIGS_PARAMS[
        "LEGEND_LIST_DISPLAY"
      ] as OptionsLayoutValue,
      verticalAlign: CHART_DEFAULT_CONFIGS_PARAMS[
        "LEGEND_VERTICAL_ALIGN"
      ] as VerticalAlignValue,
      enabled: CHART_DEFAULT_CONFIGS_PARAMS["LEGEND_ENABLED"],
      itemStyle: { ...DEFAULT_FONT_STYLES },
      // floating: true,
    },
    seriesOptions: [
      {
        name: "Active Addresses",
        data: datas.map((d: any) => [d[0], d[1]]),
        // data: formattedDatas,
        type: "line",
        lineWidth: CHART_DEFAULT_CONFIGS_PARAMS["THICKNESS"],
        opacity: CHART_DEFAULT_CONFIGS_PARAMS["OPACITY"],
        color: ACTIVE_ADDRESS_COLOR,
        yAxis: 0,
        dashStyle: CHART_DEFAULT_CONFIGS_PARAMS["DASH_STYLE"] as DashStyleValue,
        tooltip: {
          valueDecimals: 2,
        },
        marker: {
          radius: 2,
        },
        label: {
          formatter: function () {
            return `${shortenNumber((this as any).value, 2)}`;
          },
        },
      },
      {
        name: "Price (USD)",
        data: columnDatas.map((d: any) => [d[0], d[1]]),
        // data: formattedDatas,
        type: "line",
        dashStyle: CHART_DEFAULT_CONFIGS_PARAMS["DASH_STYLE"] as DashStyleValue,
        opacity: CHART_DEFAULT_CONFIGS_PARAMS["OPACITY"],
        lineWidth: CHART_DEFAULT_CONFIGS_PARAMS["THICKNESS"],
        color: PRICE_COLOR,
        yAxis: 1,
        tooltip: {
          valueDecimals: 2,
        },

        // marker: {
        //   radius: 20,
        // },
      },
    ],
    xAxisLabel: [
      {
        style: { ...DEFAULT_FONT_STYLES },
      },
    ],
    yAxisLabel: [
      { style: { ...DEFAULT_FONT_STYLES } },
      { style: { ...DEFAULT_FONT_STYLES } },
    ],
  });

  const options = useMemo<Highcharts.Options>(() => {
    return {
      chart: chartOptions.chartStyles,
      subtitle: chartOptions.chartTitleOptions.subtitle,
      title: chartOptions.chartTitleOptions.title,
      legend: chartOptions.legendOptions,
      tooltip: {
        shared: true,
      },
      xAxis: chartOptions.chartTitleOptions.xAxis.map((option, index) => ({
        title: {
          ...option,
        },
        labels: chartOptions.xAxisLabel[0],
        type: "datetime",
        dateTimeLabelFormats: {
          year: "%Y",
        },
        crosshair: true,
      })),

      yAxis: [
        {
          title: chartOptions.chartTitleOptions.yAxis[0],
          lineColor: ACTIVE_ADDRESS_COLOR,
          lineWidth: 2,
          type: "linear",
          crosshair: {
            snap: false,
          },
          labels: chartOptions.yAxisLabel[0],
        },
        {
          title: chartOptions.chartTitleOptions.yAxis[1],
          opposite: true,
          lineColor: PRICE_COLOR,
          lineWidth: 2,
          labels: {
            ...chartOptions.yAxisLabel[1],
            formatter: function () {
              return `$${shortenNumber((this as any).value, 2)}`;
            },
          },
          type: "linear",
        },
      ],
      series: chartOptions.seriesOptions,
    };
  }, [formattedDatas, chartOptions]);

  return (
    <>
      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        {/* <div className="line dash"></div> */}
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              marginBottom: "8px",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="chart-label-wrapper">
                <div
                  className="icon"
                  style={{
                    backgroundColor: ACTIVE_ADDRESS_COLOR,
                  }}
                ></div>
                <p>Active Addresses</p>
              </div>

              <div
                className="chart-label-wrapper"
                style={{
                  marginLeft: "16px",
                }}
              >
                <div
                  className="icon"
                  style={{
                    backgroundColor: PRICE_COLOR,
                  }}
                ></div>
                <p>Price (USD)</p>
              </div>
            </div>

            <Button
              size="small"
              variant="contained"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Open config drawer
            </Button>
          </div>
          <Box
            id="container"
            style={{
              width: "100%",
              aspectRatio: "16/9",
            }}
            sx={{
              ...FONT_FAMILYS.reduce(
                (prev, fontFamily) => ({
                  ...prev,
                  [`.${fontFamily.selector}`]: {
                    "*": {
                      fontFamily: fontFamily.style,
                    },
                  },
                }),
                {}
              ),
              // ".arial": {
              //   "*": {
              //     fontFamily: "Arial",
              //   },
              // },
            }}
          >
            <HighchartsReact
              highcharts={Highcharts}
              ref={chartComponentRef}
              options={options}
            />
          </Box>
        </div>
      </section>
      <ChartConfigDrawer
        anchor="right"
        chartOptions={chartOptions}
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onChangeConfigs={(configs) => {
          setChartOptions(configs);
        }}
      />
    </>
  );
}

export default Chart;

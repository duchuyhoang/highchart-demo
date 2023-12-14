import HighchartsReact from "highcharts-react-official";
// import "./App.css";
import Highcharts, {
  AlignValue,
  DashStyleValue,
  OptionsLayoutValue,
  SeriesOptionsType,
  VerticalAlignValue,
} from "highcharts/highstock";
import { useEffect, useMemo, useRef, useState } from "react";
import { columnDatas, datas } from "../../datas";
import { shortenNumber } from "@/common/utils";
import data from "../../data.json";
import ChartConfigDrawer from "../ChartConfigDrawer";
// import { SeriesOptionsType, ChartOptions } from "highcharts";
import { Box, Button } from "@mui/material";
import { CHART_DEFAULT_CONFIGS_PARAMS } from "@/common/configs";
import {
  ChartOptionsProps,
  FONT_FAMILYS,
  FONT_SIZE_OPTIONS,
  THICK_OPTIONS,
} from "../ChartConfigDrawer/type";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import ChartConfigSelect from "../ChartConfigSelect";
// hightchartStock(Highcharts);

// import Indicators from "highcharts/indicators/indicators-all.js";
// import DragPanes from "highcharts/modules/drag-panes.js";
// import AnnotationsAdvanced from "highcharts/modules/annotations-advanced.js";
// import PriceIndicator from "highcharts/modules/price-indicator.js";
// import FullScreen from "highcharts/modules/full-screen.js";
// import StockTools from "highcharts/modules/stock-tools.js";

// Indicators(Highcharts);
// DragPanes(Highcharts);
// AnnotationsAdvanced(Highcharts);
// PriceIndicator(Highcharts);
// FullScreen(Highcharts);
// StockTools(Highcharts);

const ACTIVE_ADDRESS_COLOR = "rgb(247, 147, 26)";
const PRICE_COLOR = "rgb(51, 51, 51)";

const DEFAULT_FONT_STYLES = {
  color: CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_COLOR"],
  fontWeight: CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_WEIGHT"],
  fontStyle: CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_STYLE"],
  fontFamily: FONT_FAMILYS[0].style,
  fontSize: FONT_SIZE_OPTIONS[0].value,
};

const DEFAULT_SERIES_ITEM_STYLES = {
  opacity: CHART_DEFAULT_CONFIGS_PARAMS["OPACITY"],
  // borderColor
};

const generateSeriesAttribute = (legend: string, datas: number[][]) => {
  return {
    name: legend,
  };
};

const formattedDatas = data.map((d) => [new Date(d.time).getTime(), d.value]);
function Chart() {
  const [isOpen, setIsOpen] = useState(false);
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [selectedSeri, setSeletedSeri] = useState<string | null>(null);

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
      height: 500,
      // events: {
      //   redraw: function () {
      //     console.log("re draw");
      //   },
      // },
      // zoomType: "xy",
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
        // data: datas.map((d: any) => [d[0], d[1]]),
        data: datas,
        // data:[{
        //   marker: {
        //     symbol:""
        //   }
        // }]

        // borderWidth: 1,
        // .map((d: any, index) => ({
        //   x: d[0],
        //   y: d[1],
        //   color: index % 3 === 0 ? "red" : ACTIVE_ADDRESS_COLOR,
        //   borderColor: "transparent",
        //   // opacity: 0.4,
        //   events: {
        //     click: function (...params) {
        //       console.log(this, params);
        //     },
        //   },
        // })),
        type: "column",

        // data: [
        //   [0, 4, 3, 4, 5],
        //   [1, 4, 3, 4, 5],
        //   [2, 4, 3, 4, 5],
        //   [3, 4, 3, 4, 5],
        //   [4, 4, 3, 4, 5],
        // ],
        // type: "ohlc",
        // lineWidth: CHART_DEFAULT_CONFIGS_PARAMS["THICKNESS"],
        opacity: CHART_DEFAULT_CONFIGS_PARAMS["OPACITY"],
        color: ACTIVE_ADDRESS_COLOR,

        yAxis: 0,
        dashStyle: CHART_DEFAULT_CONFIGS_PARAMS["DASH_STYLE"] as DashStyleValue,
        tooltip: {
          valueDecimals: 2,
        },
        marker: {
          symbol: CHART_DEFAULT_CONFIGS_PARAMS["SYMBOL"],
        },
        // marker: {
        //   radius: 2,
        // },
        // label: {
        //   formatter: function () {
        //     return `${shortenNumber((this as any).value, 2)}`;
        //   },
        // },
      },
      {
        name: "Price (USD)",
        // data: columnDatas.map((d: any) => [d[0], d[1]]),
        data: columnDatas,

        // .map((d: any, index) => ({
        //   x: d[0],
        //   y: d[1],
        //   events: {
        //     click: function (...params) {
        //       console.log("ccccc", params);
        //     },
        //   },
        // })),
        marker: {
          symbol: CHART_DEFAULT_CONFIGS_PARAMS["SYMBOL"],
          // lineColor: "red",
        },
        type: "line",
        dashStyle: CHART_DEFAULT_CONFIGS_PARAMS["DASH_STYLE"] as DashStyleValue,
        opacity: CHART_DEFAULT_CONFIGS_PARAMS["OPACITY"],
        lineWidth: CHART_DEFAULT_CONFIGS_PARAMS["THICKNESS"],
        color: PRICE_COLOR,
        yAxis: 1,
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
    xAxisLabel: [
      {
        style: { ...DEFAULT_FONT_STYLES },
        rotation: CHART_DEFAULT_CONFIGS_PARAMS["ROTATION"],
      },
    ],
    yAxisLabel: [
      { style: { ...DEFAULT_FONT_STYLES } },
      { style: { ...DEFAULT_FONT_STYLES } },
    ],
    seriesAdditionalConfigs: {
      // "0": {
      //   "2": {
      //     color: "red",
      //   },
      // },
    },
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
      series: chartOptions.seriesOptions.map((seri, seriIndex) => {
        return {
          ...seri,
          data: (seri as any).data.map((d: number[][], dataIndex: number) => {
            const item_seri_id = `${seri.type}_${seriIndex}_${dataIndex}`;
            return {
              x: d[0],
              y: d[1],
              selected: item_seri_id === selectedSeri,
              ...(chartOptions.seriesAdditionalConfigs[seriIndex] &&
                chartOptions.seriesAdditionalConfigs[seriIndex][dataIndex] &&
                chartOptions.seriesAdditionalConfigs[seriIndex][dataIndex]),
              events: {
                click: function () {
                  setIsOpen(true);
                  setSeletedSeri(item_seri_id);
                },
              },
              marker: {
                symbol: (seri as any).marker.symbol,
                ...(chartOptions.seriesAdditionalConfigs[seriIndex] &&
                  chartOptions.seriesAdditionalConfigs[seriIndex][dataIndex] &&
                  chartOptions.seriesAdditionalConfigs[seriIndex][dataIndex]
                    .marker),
                states: {
                  select: {
                    fillColor:
                      chartOptions.seriesAdditionalConfigs?.[seriIndex]?.[
                        dataIndex
                      ]?.color || seri.color,
                    borderColor: "blue",
                    lineColor:
                      chartOptions.seriesAdditionalConfigs?.[seriIndex]?.[
                        dataIndex
                      ]?.color || seri.color,
                  },
                },
              },
              states: {
                select: {
                  borderColor:
                    chartOptions.seriesAdditionalConfigs?.[seriIndex]?.[
                      dataIndex
                    ]?.borderColor ||
                    seri.borderColor ||
                    "blue",
                  color:
                    chartOptions.seriesAdditionalConfigs?.[seriIndex]?.[
                      dataIndex
                    ]?.color || seri.color,
                },
              },
            };
          }),
        };
      }) as Array<any>,
      plotOptions: {
        // series:[]
        // column: {
        //   states: {
        //     // select: {
        //     //   borderColor: function () {
        //     //     console.log("xxx", this);
        //     //   },
        //     //   // color: "",
        //     // },
        //   },
        // },
      },
    };
  }, [chartOptions, selectedSeri]);

  return (
    <>
      <section
        style={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100vw",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <ClickAwayListener
            mouseEvent="onMouseUp"
            onClickAway={() => {
              if (selectedSeri || isOpen) {
                setSeletedSeri(null);
                setIsOpen(false);
              }
            }}
          >
            <Box
              sx={{
                width: "100%",
                ".highcharts-credits": {
                  display: "none",
                },
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
                  {/* <div className="chart-label-wrapper">
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
              </div> */}
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
                  // aspectRatio: "16/9",
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
              <ChartConfigDrawer
                anchor="right"
                variant="persistent"
                selectedSeri={selectedSeri}
                setSeletedSeri={(v) => {
                  setSeletedSeri(v);
                }}
                chartOptions={chartOptions}
                open={isOpen}
                handleClose={() => {
                  setIsOpen(false);
                }}
                // onClose={() => {
                //   setIsOpen(false);
                // }}
                onChangeConfigs={(configs) => {
                  setChartOptions(configs);
                }}
              />
            </Box>
          </ClickAwayListener>
        </div>
      </section>
    </>
  );
}

export default Chart;

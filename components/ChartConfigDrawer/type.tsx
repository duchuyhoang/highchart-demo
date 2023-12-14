import {
  ChartOptions,
  LegendOptions,
  PointOptionsObject,
  SeriesOptionsType,
  SubtitleOptions,
  TitleOptions,
  XAxisLabelsOptions,
  XAxisOptions,
  XAxisTitleOptions,
  YAxisLabelsOptions,
  YAxisOptions,
  YAxisTitleOptions,
} from "highcharts";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Typography } from "@mui/material";
import SquareIcon from "@mui/icons-material/Square";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
export interface ChartOptionsProps {
  chartStyles: ChartOptions;
  chartTitleOptions: {
    title: TitleOptions;
    subtitle: SubtitleOptions;
    xAxis: XAxisTitleOptions[];
    yAxis: YAxisTitleOptions[];
  };
  seriesOptions: Array<SeriesOptionsType>;
  legendOptions: LegendOptions;
  yAxisLabel: Array<YAxisLabelsOptions>;
  xAxisLabel: Array<XAxisLabelsOptions>;
  seriesAdditionalConfigs: Record<string, Record<string, PointOptionsObject>>;
}

export type CHART_CONFIG_LABEL =
  | "CHART_STYLE"
  | "CHART_AXIS"
  | "CHART_SERIES"
  | "CHART_LEGENDS"
  | "CHART_X_AXIS"
  | "CHART_Y_AXIS";

export const CHART_CONFIG_LABELS: Record<CHART_CONFIG_LABEL, string> = {
  CHART_STYLE: "Chart style",
  CHART_AXIS: "Chart & axis titles",
  CHART_LEGENDS: "Legend",
  CHART_SERIES: "Series",
  CHART_X_AXIS: "Horizontal axis",
  CHART_Y_AXIS: "Vertical axis",
};

export interface ChartConfigItemProps {
  // option: SeriesOptionsType;
  configKey: CHART_CONFIG_LABEL;
  value: ChartOptionsProps;
  onChange: (config: ChartOptionsProps) => void;
}

export const FONT_FAMILYS = [
  {
    label: "Theme default",
    selector: "theme-default",
    style: "inherit",
  },
  {
    label: "San serif",
    selector: "san-serif",
    style: "sans-serif",
  },
  {
    label: "Serif",
    selector: "serif",
    style: "serif",
  },
  {
    label: "Fatasy",
    selector: "fantasy",
    style: "fantasy",
  },
];

const fontV = [10, 12, 14, 16, 18, 20, 24, 30, 36];

export const FONT_SIZE_OPTIONS = [
  {
    label: "Auto",
    value: "inherit",
  },
  ...fontV.map((v) => ({
    label: String(v),
    value: `${v}px`,
  })),
];

export const CHART_TYPES = [
  { label: "Line", value: "line" },
  { label: "Columns", value: "column" },
  { label: "Area", value: "area" },
  // { label: "Area", value: "area" },
];

const CHART_OPACITYS_VALUES = [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1];

export const CHART_OPACITYS = CHART_OPACITYS_VALUES.map((v) => ({
  label: `${v * 100}%`,
  value: v,
}));

const Dotted = () => {
  return (
    <>
      <svg
        viewBox="0 0 75 2"
        aria-label="Dotted"
        role="img"
        className="line dotted"
      >
        <line
          x1="0"
          y1="1"
          x2="75"
          y2="1"
          stroke-width="2"
          stroke-dasharray="2, 3"
        ></line>
      </svg>
    </>
  );
};

const DashDot = () => {
  return (
    <>
      <svg
        viewBox="0 0 75 2"
        aria-label="Dash Dot"
        role="img"
        className="line dash-dot"
      >
        <line
          x1="0"
          y1="1"
          x2="75"
          y2="1"
          stroke-width="2"
          stroke-dasharray="7, 5, 2, 5"
        ></line>
      </svg>
    </>
  );
};

const Dash = () => {
  return (
    <>
      <svg
        viewBox="0 0 75 2"
        aria-label="Dashed"
        role="img"
        className="line dash"
      >
        <line
          x1="0"
          y1="1"
          x2="75"
          y2="1"
          stroke-width="2"
          stroke-dasharray="7, 6"
        ></line>
      </svg>
    </>
  );
};

const LongDash = () => {
  return (
    <>
      <svg
        viewBox="0 0 75 2"
        aria-label="Long Dash"
        role="img"
        className="line long-dash"
      >
        <line
          x1="0"
          y1="1"
          x2="75"
          y2="1"
          stroke-width="2"
          stroke-dasharray="14, 7.4"
        ></line>
      </svg>
    </>
  );
};

const LongDashDot = () => {
  return (
    <>
      <svg
        viewBox="0 0 75 2"
        aria-label="Long Dash Dot"
        role="img"
        className="line long-dash-dot"
      >
        <line
          x1="0"
          y1="1"
          x2="75"
          y2="1"
          stroke-width="2"
          stroke-dasharray="14, 5, 2, 5"
        ></line>
      </svg>
    </>
  );
};

export const DASH_OPTIONS = [
  {
    value: "Solid",
    label: <div className="line solid"></div>,
  },
  {
    value: "Dot",
    label: <Dotted />,
  },
  {
    value: "Dash",
    label: <Dash />,
  },
  {
    value: "DashDot",
    label: <DashDot />,
  },
  {
    value: "LongDash",
    label: <LongDash />,
  },
  {
    value: "LongDashDot",
    label: <LongDashDot />,
  },
];

export const THICK_VALUES = [1, 2, 4, 8];

export const THICK_OPTIONS = THICK_VALUES.map((v) => ({
  label: `${v}px`,
  value: v,
}));

export const LEGEND_HORIZONTAL_ALIGN_VALUES = [
  {
    label: "Left",
    value: "left",
  },
  {
    label: "Center",
    value: "center",
  },
  {
    label: "Right",
    value: "right",
  },
];

export const LEGEND_VERTICAL_ALIGN_VALUES = [
  {
    label: "Top",
    value: "top",
  },
  {
    label: "Middle",
    value: "middle",
  },
  {
    label: "Bottom",
    value: "bottom",
  },
];

export const LEGEND_LIST_VALUES = [
  {
    label: "Horizontal",
    value: "horizontal",
  },
  {
    label: "Vertical",
    value: "vertical",
  },
];

export const ROTATION_VALUES = [
  {
    label: "0&#176;",
    value: 0,
  },
  {
    label: "30&#176;",
    value: 30,
  },
  {
    label: "60&#176;",
    value: 60,
  },
  {
    label: "90&#176;",
    value: 90,
  },
];

const SymbolItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {icon}
        <Typography
          variant="body1"
          sx={{
            marginLeft: "4px",
          }}
        >
          {label}
        </Typography>
      </Box>
    </>
  );
};

export const SYMBOL_VALUES = [
  {
    label: <SymbolItem label="Circle" icon={<CircleIcon fontSize="small" />} />,
    value: "circle",
  },
  {
    label: <SymbolItem label="Square" icon={<SquareIcon fontSize="small" />} />,
    value: "square",
  },
  {
    label: (
      <SymbolItem
        label="Triangle"
        icon={<ChangeHistoryIcon fontSize="small" />}
      />
    ),
    value: "triangle",
  },
  {
    label: (
      <SymbolItem
        label="Triangle down"
        icon={
          <ChangeHistoryIcon
            sx={{
              transform: "rotate(180deg)",
            }}
            fontSize="small"
          />
        }
      />
    ),
    value: "triangle-down",
  },
];

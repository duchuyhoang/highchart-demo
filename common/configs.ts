// import type { Configs } from "@/configs/envs";
import getNextConfigs from "next/config";
export const getConfigs = (): any => {
  const { publicRuntimeConfig } = getNextConfigs();
  return publicRuntimeConfig as any;
};

export const CHART_DEFAULT_CONFIGS_PARAMS = {
  AXIS_LABEL_COLOR: "#000",
  AXIS_LABEL_FONT_WEIGHT: "normal",
  AXIS_LABEL_FONT_WEIGHT_BOLD: "bold",
  AXIS_LABEL_FONT_STYLE: "normal",
  AXIS_LABEL_FONT_STYLE_ITALIC: "italic",
  LEGEND_HORIZONTAL_ALIGN: "center",
  LEGEND_VERTICAL_ALIGN: "top",
  LEGEND_LIST_DISPLAY: "horizontal",
  LEGEND_ENABLED: true,
  THICKNESS: 2,
  DASH_STYLE: "Solid",
  OPACITY: 1,
  BG: "#fff",
  CHART_BORDER_COLOR: "#FFF",
  SERIES_COLORS: ["rgb(247, 147, 26)", "rgb(51, 51, 51)"],
};

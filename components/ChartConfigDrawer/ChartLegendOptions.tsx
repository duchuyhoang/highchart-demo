import { Grid } from "@mui/material";
import ChartConfigSelect from "../ChartConfigSelect";
import {
  ChartOptionsProps,
  LEGEND_LIST_VALUES,
  LEGEND_HORIZONTAL_ALIGN_VALUES,
  LEGEND_VERTICAL_ALIGN_VALUES,
} from "./type";
import { cloneDeep, set } from "lodash";
import ChartFontFamilyPicker from "../ChartFontFamilyPicker";
import ChartFontSizeSelector from "../ChartFontSizeSelector";
import ColorPicker from "../ColorPicker";
import ChartTextFormatter from "../ChartTextFormatter";
import ChartInputLabel from "./base";

interface ChartLegendOptionsProps {
  value: ChartOptionsProps;
  onChange: (v: ChartOptionsProps) => void;
}

const ChartLegendOptions = ({ onChange, value }: ChartLegendOptionsProps) => {
  const { legendOptions } = value;

  const handleChangeValue = (property: string, v: any) => {
    let path = `legendOptions.${property}`;
    onChange(cloneDeep(set(value, path, v)));
  };
  const legendLayoutValue =
    legendOptions.enabled === false ? "none" : legendOptions.layout;

  return (
    <>
      <Grid
        container
        columnSpacing={"10px"}
        rowSpacing={"16px"}
        mt={"4px"}
        sx={{
          ".MuiInputBase-root": {
            width: "100%",
          },
        }}
      >
        <Grid item xs={12}>
          <ChartConfigSelect
            label="Layout"
            value={legendLayoutValue}
            onChange={(e) => {
              const v = e.target.value;
              if (v === "none") {
                handleChangeValue("enabled", false);
              } else {
                handleChangeValue("enabled", true);
                handleChangeValue("layout", v);
              }
            }}
            datas={[
              {
                label: "None",
                value: "none",
              },
              ...LEGEND_LIST_VALUES,
            ]}
          />
        </Grid>
        <Grid item xs={6}>
          <ChartConfigSelect
            label="Horizontal align"
            value={legendOptions.align}
            onChange={(e) => {
              handleChangeValue("align", e.target.value);
            }}
            datas={LEGEND_HORIZONTAL_ALIGN_VALUES}
          />
        </Grid>

        <Grid item xs={6}>
          <ChartConfigSelect
            label="Vertical align"
            value={legendOptions.verticalAlign}
            onChange={(e) => {
              handleChangeValue("verticalAlign", e.target.value);
            }}
            datas={LEGEND_VERTICAL_ALIGN_VALUES}
          />
        </Grid>

        <Grid item xs={6}>
          <ChartFontFamilyPicker
            label="Legend font"
            value={legendOptions.itemStyle?.fontFamily!}
            onChange={(v) => {
              handleChangeValue("itemStyle.fontFamily", v);
            }}
            usingStyle
          />
        </Grid>
        <Grid item xs={6}>
          <ChartFontSizeSelector
            label="Legend font size"
            value={legendOptions.itemStyle?.fontSize!}
            onChange={(v) => {
              handleChangeValue("itemStyle.fontSize", v);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ChartInputLabel>Legend format</ChartInputLabel>
          <ChartTextFormatter
            fontStyleValue={legendOptions.itemStyle?.fontStyle! as string}
            fontWeightValue={legendOptions.itemStyle?.fontWeight! as string}
            onChangeFontStyle={(v) => {
              handleChangeValue("itemStyle.fontStyle", v);
            }}
            onChangeFontWeight={(v) => {
              handleChangeValue("itemStyle.fontWeight", v);
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <ColorPicker
            value={legendOptions.itemStyle?.color!}
            label="Text color"
            onChange={(v) => {
              handleChangeValue("itemStyle.color", v);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ChartLegendOptions;

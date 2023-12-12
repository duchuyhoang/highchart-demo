import { Box } from "@mui/material";
import ColorPicker from "../ColorPicker";
import { ChartOptionsProps } from "./type";
// import { set } from "@/common/utils";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import ChartFontFamilyPicker from "../ChartFontFamilyPicker";

interface ChartStyleProps {
  value: ChartOptionsProps;
  onChange: (v: ChartOptionsProps) => void;
}

const ChartStyleOptions = ({ value, onChange }: ChartStyleProps) => {
  const { chartStyles } = value;
  const handleChange = (key: string, v: any) => {
    onChange(cloneDeep(set(value, key, v)));
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ColorPicker
          value={chartStyles.backgroundColor as string}
          onChange={(color) => {
            handleChange("chartStyles.backgroundColor", color);
          }}
          label={"Background color"}
        />
        <ChartFontFamilyPicker
          value={chartStyles.className as string}
          label="Font"
          onChange={(v) => {
            handleChange("chartStyles.className", v);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ColorPicker
          value={chartStyles.borderColor as string}
          onChange={(color) => {
            handleChange("chartStyles.borderColor", color);
          }}
          label={"Chart border color"}
        />
      </Box>
    </>
  );
};

export default ChartStyleOptions;

import { Box, MenuItem, Select } from "@mui/material";
import { FONT_FAMILYS } from "../ChartConfigDrawer/type";
import ChartInputLabel from "../ChartConfigDrawer/base";

interface ChartFontFamilyPickerProps {
  value: string;
  onChange: (v: any) => void;
  label: React.ReactNode;
  usingStyle?: boolean;
}

const ChartFontFamilyPicker = ({
  onChange,
  value,
  label,
  usingStyle,
}: ChartFontFamilyPickerProps) => {
  return (
    <Box>
      <ChartInputLabel>{label}</ChartInputLabel>
      <Select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        size="small"
      >
        {FONT_FAMILYS.map((v) => (
          <MenuItem key={v.selector} value={usingStyle ? v.style : v.selector}>
            {v.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ChartFontFamilyPicker;

import { Box, MenuItem, Select } from "@mui/material";
import ChartInputLabel from "../ChartConfigDrawer/base";
import { THICK_OPTIONS } from "../ChartConfigDrawer/type";

interface ChartLineThicknessProps {
  value: string;
  onChange: (v: any) => void;
  label: React.ReactNode;
}

const ChartLineThickness = ({
  onChange,
  value,
  label,
}: ChartLineThicknessProps) => {
  return (
    <Box>
      <ChartInputLabel>{label}</ChartInputLabel>
      <Select
        value={value}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
        size="small"
      >
        {THICK_OPTIONS.map((v) => (
          <MenuItem key={v.value} value={v.value}>
            {v.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ChartLineThickness;

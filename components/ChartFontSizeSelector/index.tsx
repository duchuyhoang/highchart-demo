import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import ChartInputLabel from "../ChartConfigDrawer/base";
import { FONT_SIZE_OPTIONS } from "../ChartConfigDrawer/type";

interface ChartFontSizeSelectorProps {
  value: string;
  onChange: (v: any) => void;
  label: React.ReactNode;
  //   usingStyle?: boolean;
}

const ChartFontSizeSelector = ({
  onChange,
  value,
  label,
}: ChartFontSizeSelectorProps) => {
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
        {FONT_SIZE_OPTIONS.map((v) => (
          <MenuItem key={v.value} value={v.value}>
            {v.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ChartFontSizeSelector;

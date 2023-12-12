import { Box, MenuItem, Select, SelectProps } from "@mui/material";
import React from "react";
import ChartInputLabel from "../ChartConfigDrawer/base";

interface ChartConfigSelectProps extends SelectProps {
  label: string;
  datas: Array<{
    label: React.ReactNode;
    value: any;
  }>;
}

const ChartConfigSelect = ({
  label,
  datas,
  ...rest
}: ChartConfigSelectProps) => {
  return (
    <>
      <Box>
        <ChartInputLabel>{label}</ChartInputLabel>
        <Select size="small" {...rest}>
          {datas.map((v) => (
            <MenuItem key={v.value} value={v.value}>
              {v.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </>
  );
};

export default ChartConfigSelect;

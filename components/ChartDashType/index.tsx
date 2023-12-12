import { Box, MenuItem, Select } from "@mui/material";
import React from "react";
import ChartInputLabel from "../ChartConfigDrawer/base";
import { DASH_OPTIONS } from "../ChartConfigDrawer/type";

interface ChartDashTypeProps {
  value: string;
  onChange: (v: any) => void;
  label: React.ReactNode;
}

const ChartDashType = ({ onChange, value, label }: ChartDashTypeProps) => {
  return (
    <Box
      sx={{
        ".MuiSelect-select": {
          display: "flex",
          alignItems: "center",
        },
        ".line": {
          width: "100%",
          // width: "75px",
          border: "1.5px solid #202124",
          "&.dotted,&.dash-dot,&.dash,&.long-dash,&.long-dash-dot": {
            border: "none",
            stroke: "rgba(0,0,0,.87)",
          },
        },
      }}
    >
      <ChartInputLabel>{label}</ChartInputLabel>
      <Select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        size="small"
        MenuProps={{
          PaperProps: {
            sx: {
              ".MuiMenuItem-root": {
                height: "28px",
              },
              ".line": {
                // width: "100%",
                width: "75px",
                border: "1.5px solid #202124",
                "&.dotted,&.dash-dot,&.dash,&.long-dash,&.long-dash-dot": {
                  border: "none",
                  stroke: "rgba(0,0,0,.87)",
                },
              },
            },
          },
        }}
      >
        {DASH_OPTIONS.map((v) => (
          <MenuItem key={v.value} value={v.value}>
            {v.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default ChartDashType;

import { Box, Popover } from "@mui/material";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import ChartInputLabel from "../ChartConfigDrawer/base";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  label: React.ReactNode;
}

const ColorPicker = ({ onChange, value, label }: ColorPickerProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const popoverOpen = open && Boolean(anchorEl);

  return (
    <>
      <Box>
        <ChartInputLabel>{label}</ChartInputLabel>

        <Box
          ref={(ref: HTMLDivElement) => {
            setAnchorEl(ref);
          }}
          onClick={() => {
            setOpen(true);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "4px",
            border: "1px solid #dadce0",
            width: "max-content",
            padding: "6px",
          }}
          className="color-container"
        >
          <Box
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: `${value}`,
              border: "1px solid #dadce0",
            }}
          ></Box>
          <ArrowDropDownIcon
            sx={{
              marginLeft: "8px",
            }}
          />
        </Box>
      </Box>
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <SketchPicker
          color={value}
          onChangeComplete={(v) => {
            onChange(v.hex);
            setOpen(false);
          }}
        />
      </Popover>
    </>
  );
};

export default ColorPicker;

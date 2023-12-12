import { Box, BoxProps, Popover } from "@mui/material";
import React, { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { set } from "@/common/utils";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { CHART_DEFAULT_CONFIGS_PARAMS } from "@/common/configs";
const ChartTextItemWrapper = ({
  children,
  active,
  ...rest
}: React.PropsWithChildren<{ active: boolean } & BoxProps>) => {
  return (
    <Box
      sx={{
        margin: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...(active && {
          background: "#e6f4ea",
        }),
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export type CHART_TEXT_ALIGN =
  | ""
  | "left"
  | "right"
  | "center"
  | "low"
  | "high"
  | "middle";

interface ChartTextAlignProps {
  // type: "LEFT" | "LOW";
  value: CHART_TEXT_ALIGN;

  onChange: (v: CHART_TEXT_ALIGN) => void;
}

const ChartTextAlign = ({ value, onChange }: ChartTextAlignProps) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const popoverOpen = open && Boolean(anchorEl);

  const type1Values = ["left", "center", "right"];

  const type = type1Values.includes(value) ? "LEFT" : "LOW";

  const handleChangeTextAlignValue = (v: any) => {
    onChange(v);
    setOpen(false);
  };

  return (
    <>
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
        }}
      >
        {(value === "" || value === "center" || value === "middle") && (
          <FormatAlignCenterIcon />
        )}
        {(value === "left" || value === "low") && <FormatAlignLeftIcon />}
        {(value === "right" || value === "high") && <FormatAlignRightIcon />}
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
        PaperProps={{
          sx: {
            marginTop: "25px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            onClick={() => {
              handleChangeTextAlignValue(type == "LEFT" ? "left" : "low");
            }}
          >
            <FormatAlignLeftIcon />
          </Box>
          <Box
            onClick={() => {
              handleChangeTextAlignValue(type == "LEFT" ? "center" : "middle");
            }}
          >
            <FormatAlignCenterIcon />
          </Box>
          <Box
            onClick={() => {
              handleChangeTextAlignValue(type == "LEFT" ? "right" : "high");
            }}
          >
            <FormatAlignRightIcon />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

interface ChartTextFormatterProps {
  fontWeightValue: string;
  fontStyleValue: string;
  alignValue?: CHART_TEXT_ALIGN;
  onChangeFontWeight: (v: any) => void;
  onChangeFontStyle: (v: any) => void;
  onChangeAlignValue?: (v: any) => void;
}

const ChartTextFormatter = ({
  alignValue,
  fontStyleValue,
  fontWeightValue,
  onChangeFontWeight,
  onChangeAlignValue,
  onChangeFontStyle,
}: ChartTextFormatterProps) => {
  const isBoldActive =
    fontWeightValue ===
    CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_WEIGHT_BOLD"];

  const isItalicActive =
    fontStyleValue ===
    CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_STYLE_ITALIC"];

  return (
    <Box
      sx={{
        padding: "6px",
        borderRadius: "4px",
        border: "1px solid #dadce0",
        width: "max-content",
        height: "40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ChartTextItemWrapper
        active={isBoldActive}
        onClick={() => {
          onChangeFontWeight(
            isBoldActive
              ? CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_WEIGHT"]
              : CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_WEIGHT_BOLD"]
          );
        }}
      >
        <FormatBoldIcon />
      </ChartTextItemWrapper>
      <ChartTextItemWrapper
        active={isItalicActive}
        onClick={() => {
          onChangeFontStyle(
            isItalicActive
              ? CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_STYLE"]
              : CHART_DEFAULT_CONFIGS_PARAMS["AXIS_LABEL_FONT_STYLE_ITALIC"]
          );
        }}
      >
        <FormatItalicIcon />
      </ChartTextItemWrapper>
      {alignValue && onChangeAlignValue && (
        <ChartTextItemWrapper active={false}>
          <ChartTextAlign
            value={alignValue}
            onChange={(v) => {
              onChangeAlignValue && onChangeAlignValue(v);
            }}
          />
          <ArrowDropDownIcon />
        </ChartTextItemWrapper>
      )}
    </Box>
  );
};

export default ChartTextFormatter;

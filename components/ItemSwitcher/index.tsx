import { Box } from "@mui/material";
import React from "react";
import { TableDisplay, CardDisplay } from "../Icon";
// TableDisplay;
export enum SwitcherType {
  CARD = "CARD",
  TABLE = "TABLE",
}

interface ItemSwitcherProps {
  type: SwitcherType;
  onChange: (e: SwitcherType) => void;
}

const ItemSwitcher = ({ onChange, type }: ItemSwitcherProps) => {
  return (
    <Box
      sx={(theme) => ({
        height: "46px",
        borderRadius: "4px",
        cursor: theme.palette.action.hover,
        display: "flex",
        ".item": {
          width: "48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8F9FC",
          "&:first-of-type": {
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
          },
          "&:last-of-type": {
            borderTopRightRadius: "4px",
            borderBottomRightRadius: "4px",
          },
          svg: {
            width: "24px",
            height: "24px",
          },
          "&.active": {
            backgroundColor: "#D6DDEB",
            svg: {
              fill: "#0091EA",
            },
          },
        },
      })}
    >
      <Box
        className={`item ${type === SwitcherType.CARD && "active"}`}
        onClick={() => {
          onChange(SwitcherType.CARD);
        }}
      >
        <CardDisplay />
      </Box>
      <Box
        className={`item ${type === SwitcherType.TABLE && "active"}`}
        onClick={() => {
          onChange(SwitcherType.TABLE);
        }}
      >
        <TableDisplay />
      </Box>
    </Box>
  );
};

export default ItemSwitcher;

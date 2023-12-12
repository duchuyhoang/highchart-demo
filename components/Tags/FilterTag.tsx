import { Chip, ChipProps } from "@mui/material";
import React from "react";

interface FilterTagProps extends ChipProps {
  active: boolean;
  label: string;
}

export const FilterTag = ({ active, label, ...rest }: FilterTagProps) => {
  return (
    <>
      <Chip
        sx={(theme) => ({
          border: "1px solid rgb(233, 237, 246)",
          backgroundColor: theme.palette.common.white,
          borderRadius: "10px",
          cursor: theme.palette.action.hover,
          ".MuiChip-label": {
            fontSize: "0.8125rem",
            color: "rgb(23, 29, 43)",
          },
          ...(active && {
            backgroundColor: "rgb(233, 237, 246)",
          }),
        })}
        label={label}
        {...rest}
      ></Chip>
    </>
  );
};

// export default FilterTag;

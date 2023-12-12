import React from "react";
import { MagnifyingGlass } from "../Icon";
import { Input, InputProps } from "@mui/material";

const SearchInput = ({ sx, ...rest }: InputProps) => {
  return (
    <Input
      startAdornment={
        <MagnifyingGlass
          style={{
            marginRight: "12px",
          }}
        />
      }
      sx={(theme) => ({
        backgroundColor: "#F8F9FC",
        display: "flex",
        borderRadius: "4px",
        alignItems: "center",
        padding: "7px 0px 9px 12px",
        height: "46px",
        boxSizing: "border-box",
        "&:after": {
          display: "none",
        },
        "&:before": {
          display: "none",
        },
        input: {
          padding: "0px",
          paddingTop: "2px",
          fontSize: "14px",
          fontWeight: 400,
          lineHeight: "140%",
          color: theme.palette.text.primary,
        },
        // ...sx,
      })}
      placeholder={"Search research by keyword,tag or author"}
      {...rest}
    />
  );
};

export default SearchInput;

import { Box, BoxProps } from "@mui/material";
import React from "react";

interface IContainer {
  children?: React.ReactNode;
  containerProps?: BoxProps;
}

const Container = ({ children, containerProps }: IContainer) => {
  return (
    <Box
      sx={{
        width: "100%",
        px: "24px",
      }}
      {...containerProps}
    >
      {children}
    </Box>
  );
};

export default Container;

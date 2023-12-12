import { Typography } from "@mui/material";
import React from "react";

const ChartInputLabel = (props: React.PropsWithChildren) => {
  return (
    <Typography
      sx={{
        fontSize: "12px",
        color: "#5f6368",
        marginBottom: "4px",
      }}
    >
      {props.children}
    </Typography>
  );
};

export default ChartInputLabel;

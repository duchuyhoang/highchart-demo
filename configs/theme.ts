import { PaletteMode, createTheme } from "@mui/material";

export const FONT_FAMILY = "'Sen', sans-serif";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    typography: {
      htmlFontSize: 16,
      body1: {
        fontSize: "0.875rem",
        lineHeight: 1.5,
        fontWeight: 400,
      },
      h1: {
        fontSize: "2rem",
        fontWeight: "600",
        lineHeight: 1.2,
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: "600",
        lineHeight: 1.2,
      },
      h4: {
        fontSize: "1.2rem",
        fontWeight: "600",
        lineHeight: 1.2,
      },

      h6: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: "normal",
      },
      subtitle1: {
        fontSize: "0.875rem",
        fontWeight: 600,
        lineHeight: "normal",
      },
      subtitle2: {
        fontSize: "0.8rem",
        fontWeight: 400,
        lineHeight: "normal",
      },
    },
    palette: {
      background: {
        default: mode === "dark" ? "#151719" : "#fff",
        paper: mode === "dark" ? "#151719" : "#fff",
      },
      text: {
        primary: mode === "dark" ? "#fff" : "#15171a",
        secondary: mode === "dark" ? "#15171a" : "#fff",
        disabled: mode === "dark" ? "#5f5f5f" : "#979797",
      },
      primary: {
        main: "#278EDA",
        contrastText: "#ffffff",
        dark: "#151A17",
      },
      secondary: {
        main: mode === "dark" ? "#5f5f5f" : "#979797",
      },
      error: {
        main: "#ff453a",
        contrastText: "#FFF6F5",
      },
      warning: {
        main: "rgb(241, 152, 55)",
        contrastText: "#FFFAF0",
        "500": "rgba(255, 219, 169, 0.5)",
      },
      info: {
        main: "#0091ff",
        contrastText: "#E9F7FF",
      },
      success: {
        main: "#00c569",
        contrastText: "#F1F8F4",
      },
      common: {
        black: "#151719",
        white: "#fff",
      },

      action: {
        hover: "pointer",
        //   hover: `url('${(cursor as any).src}'),auto`,
        active: "#38404A",
      },
      divider: "rgb(41, 47, 56)",
    },
    components: {
      MuiChip: {
        styleOverrides: {
          label: {
            fontSize: "0.8125rem",
            fontWeight: 400,
            lineHeight: 1.43,
            fontFamily: FONT_FAMILY,
          },
        },
      },
      MuiLink: {},
      MuiCheckbox: {
        styleOverrides: {
          root: {
            width: "16px",
            height: "16px",
          },
          colorPrimary: {
            color: "rgb(0, 0, 0)",
          },
        },
      },
    },
  });

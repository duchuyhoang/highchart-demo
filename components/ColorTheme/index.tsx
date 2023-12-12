import { getTheme } from "@/configs/theme";
import { PaletteMode, Theme } from "@mui/material";
import React, { useContext, useMemo, useState } from "react";

const ColorThemeContext = React.createContext<{
  mode: PaletteMode;
  changeMode: (mode: PaletteMode) => void;
  theme: Theme;
}>({
  mode: "light",
  theme: {} as Theme,
  changeMode: () => {
    //
  },
});
interface ColorThemeProps {
  children?: React.ReactNode;
}

const ColorTheme = ({ children }: ColorThemeProps) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const handleChangeMode = (mode: PaletteMode) => {
    setMode(mode);
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  theme.typography.body1.fontFamily = "'Sen', sans-serif";

  return (
    <>
      <ColorThemeContext.Provider
        value={{
          mode: mode,
          changeMode: handleChangeMode,
          theme,
        }}
      >
        {children}
      </ColorThemeContext.Provider>
    </>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);

export default ColorTheme;

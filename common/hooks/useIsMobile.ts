import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@mui/material";

/**
 * Returns true if the current view is mobile.
 * @param theme
 */
export function useIsMobileView(): boolean {
  const theme = useTheme();
  // 1024
  return useMediaQuery(theme.breakpoints.down(1024));
}

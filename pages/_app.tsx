import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { Sen } from "@next/font/google";
import ColorThemeContext, { useColorTheme } from "@/components/ColorTheme";
import { useLayoutEffect } from "react";

const sen = Sen({ subsets: ["latin"], weight: ["400", "700", "800"] });

function MyApp({ Component, pageProps }: AppProps) {
  const { mode, theme } = useColorTheme();

  return (
    <>
      {/* <main className={`app ${sen.className}`}> */}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </main> */}
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default function (props: AppProps) {
  return (
    <>
      <ColorThemeContext>
        <MyApp {...props} />
      </ColorThemeContext>
    </>
  );
}

import { createTheme } from "@mui/material";
import getLight from "./light";
import { getTypography } from "./typography";
import getDark from "./dark";
import { Theme } from "../configs";

const theme = (mode: string) => {
  const themeConfig = mode === Theme.LIGHT ? getLight() : getDark();
  return createTheme({
    ...(themeConfig || {}),
    typography: { ...getTypography() },
  });
};
export default theme;

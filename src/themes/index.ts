import { createTheme } from "@mui/material";
import typoTheme from "./typography";

const themes = createTheme({
  typography: {
    ...typoTheme.typography,
  },
});
export default themes;

import { RouterProvider } from "react-router-dom";
import routers from "./routers/routers";
import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import "./locales/i18n";
function App() {
  const modeThemeStyle = useSelector(
    (state: RootState) => state.appstate.modeTheme
  );
  return (
    <>
      <ThemeProvider theme={theme(modeThemeStyle)}>
        <RouterProvider router={routers} />
      </ThemeProvider>
    </>
  );
}

export default App;

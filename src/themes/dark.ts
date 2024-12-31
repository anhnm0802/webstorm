import { createTheme } from "@mui/material";

const getDark = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1557FF",
        contrastText: "#fff",
      },
      secondary: {
        main: "#737C89",
        contrastText: "#fff",
      },
      warning: {
        main: "#F4A734",
        contrastText: "#fff",
      },
      error: {
        main: "#D00B0B",
        contrastText: "#fff",
      },
    },
  });
  return createTheme(theme, {
    component: {
      MuiDrawer: {
        styleOverrides: {
          root: {
            "& *": {
              textTransform: "none",
            },
          },
        },
      },
    },
  });
};
export default getDark;

import { createTheme } from "@mui/material";
const getLight = () => {
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
    components: {
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

export default getLight;

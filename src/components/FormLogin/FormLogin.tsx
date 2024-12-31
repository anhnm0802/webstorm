import { Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";

const FormLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Grid container sx={{ height: "100vh", width: "100vw" }}>
        <Grid
          size={{ xs: 0, sm: 2, md: 4, lg: 4, xl: 4 }}
          bgcolor={"#ECBC76"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/src/assets/images/Saly-3.png"
            sx={{
              width: {
                md: "200px",
                lg: "300px",
                xl: "500px",
              },
              height: "auto",
            }}
            display={{ xs: "none", sm: "none", md: "flex" }}
          />
        </Grid>
        <Grid
          size={{ xs: 12, sm: 8, md: 4, lg: 4, xl: 4 }}
          sx={{
            position: "relative",
            background: "linear-gradient(to right, #ECBC76 50%, white 50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              position: "absolute",
              padding: "35px",
              height: "80%",
              width: "100%",
              borderRadius: "30px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                gap: 2,
              }}
            >
              {children}
            </Box>
          </Paper>
        </Grid>
        <Grid
          size={{ xs: 0, sm: 2, md: 4, lg: 4, xl: 4 }}
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/src/assets/images/11a7c18d189607d5e25f5250d7724f34.png"
            sx={{
              width: {
                md: "200px",
                lg: "300px",
                xl: "500px",
              },
              height: "auto",
            }}
            display={{ xs: "none", sm: "none", md: "flex" }}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default FormLogin;

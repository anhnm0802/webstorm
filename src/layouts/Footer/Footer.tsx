import { Button, Grid, TextField } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Grid container height={"30rem"} bgcolor={"#252641"} color={"white"}>
        <Grid
          item
          className="cotphu"
          display={{ xs: "none", sm: "flex" }}
          sm={3}
          md={3}
          lg={3}
        ></Grid>
        <Grid
          item
          container
          className="cotchinh"
          sm={6}
          md={6}
          lg={6}
          flexDirection={"column"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          <Grid>Test</Grid>
          <Grid>Subscribe </Grid>
          <Grid container alignItems={"center"} justifyContent={"center"}>
            <Grid flex={0.8}>
              <TextField
                sx={{ width: "90%" }}
                placeholder="Your Email"
                InputProps={{
                  sx: { borderRadius: 10, color: "white" },
                }}
                size="small"
              ></TextField>
            </Grid>
            <Grid>
              <Button
                sx={{
                  borderRadius: 10,
                  bgcolor: "#49BBBD",
                  px: 2,
                  color: "white",
                }}
              >
                Subcrible
              </Button>
            </Grid>
          </Grid>
          <Grid sx={{}}>
            <Grid container>
              <Grid>Careers</Grid>
              <Grid>Privacy Policy</Grid>
              <Grid>Terms & Conditions</Grid>
            </Grid>
            <Grid>hehehehe</Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className="cotphu"
          display={{ xs: "none", sm: "flex" }}
          sm={3}
          md={3}
          lg={3}
        ></Grid>
      </Grid>
    </>
  );
};
export default Footer;

import { Box, Button, Grid } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
const Header = () => {
  return (
    <>
      <Grid
        container
        sx={{
          height: "7rem",
          bgcolor: "#874F41",
          position: "sticky",
          top: 0,
        }}
      >
        <Grid
          container
          item
          xs={9}
          sm={4}
          md={4}
          lg={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ display: { xs: "flex" } }}
          >
            Test
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}></Grid>
        </Grid>
        <Grid
          container
          item
          xs={3}
          sm={8}
          md={8}
          lg={8}
          alignItems={"center"}
          justifyContent={"space-around"}
          display={{ xs: "none", sm: "flex" }}
        >
          <Grid>
            <Button startIcon={<HomeOutlinedIcon />}>Home</Button>
          </Grid>
          <Grid>
            <Button startIcon={<SchoolOutlinedIcon />}>Course</Button>
          </Grid>
          <Grid>
            <Button startIcon={<SupportAgentOutlinedIcon />}>Careers</Button>
          </Grid>
          <Grid>
            <Button startIcon={<BookOutlinedIcon />}>Blog</Button>
          </Grid>
          <Grid>
            <Button startIcon={<Diversity1OutlinedIcon />}>About us</Button>
          </Grid>
          <Grid>
            <Box>Profile</Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Header;

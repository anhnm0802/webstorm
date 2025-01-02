import { Box, Button, Drawer, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import LionIcon from "../../assets/icon/LogoLion";
import { useNavigate } from "react-router-dom";
import instance from "../../service/api";
import { useEffect, useState } from "react";
import CustomTrans from "../../components/CustomTrans/CustomTrans";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DehazeOutlinedIcon from "@mui/icons-material/DehazeOutlined";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
const Header = () => {
  const [datatable, setDataTable] = useState([]);
  useEffect(() => {
    const checklog = async () => {
      try {
        const response = await instance.get("/course");
        console.log(response.data);
        setDataTable(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    checklog();
  }, []);
  const [openDraw, setOpenDraw] = useState(false);
  const toggleOpenDraw = (newOpen: boolean) => {
    setOpenDraw(newOpen);
  };

  const DrawerList = () => {
    return (
      <>
        <Box
          sx={{
            height: "100vh",
            width: "600px",
            bgcolor: "white",
          }}
          onClick={() => toggleOpenDraw(false)}
        ></Box>
      </>
    );
  };
  return (
    <>
      <Drawer open={openDraw} onClose={() => toggleOpenDraw(false)}>
        <DrawerList />
      </Drawer>
      <Grid
        container
        sx={{
          height: "60px",
          bgcolor: "gray",
          position: "sticky",
          top: 0,
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <Grid
          size={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "3rem",
          }}
        >
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button>
              <CustomTrans>shop</CustomTrans>
            </Button>
            <Button>
              <CustomTrans>start here</CustomTrans>
            </Button>
            <Button>
              <CustomTrans>resources</CustomTrans>
            </Button>
            <Button>
              <CustomTrans>book a call</CustomTrans>
            </Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "3rem",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button>IDCO</Button>
          </Box>
        </Grid>
        <Grid
          size={{ xs: 0, sm: 4, md: 4, lg: 4, xl: 4 }}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "3rem",
            justifyContent: "flex-end",
            paddingRight: "3rem",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
            <Button>
              <CustomTrans>cart</CustomTrans>
            </Button>
            <IconButton onClick={() => toggleOpenDraw(true)}>
              <DensityMediumOutlinedIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Header;

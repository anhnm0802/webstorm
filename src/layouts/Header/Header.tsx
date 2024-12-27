import { Box, Button, Grid } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import LionIcon from "../../assets/icon/LogoLion";
import { useNavigate } from "react-router-dom";
import instance from "../../service/api";
import { useEffect, useState } from "react";
const Header = () => {
  const iconMap = {
    HomeOutlinedIcon: <HomeOutlinedIcon />,
    SchoolOutlinedIcon: <SchoolOutlinedIcon />,
    SupportAgentOutlinedIcon: <SupportAgentOutlinedIcon />,
    BookOutlinedIcon: <BookOutlinedIcon />,
    Diversity1OutlinedIcon: <Diversity1OutlinedIcon />,
  };
  const list = [
    { id: 1, name: "Home", logo: "HomeOutlinedIcon" },
    { id: 2, name: "Course", logo: "SchoolOutlinedIcon" },
    { id: 3, name: "Careers", logo: "SupportAgentOutlinedIcon" },
    { id: 4, name: "Blog", logo: "BookOutlinedIcon" },
    { id: 5, name: "About us", logo: "Diversity1OutlinedIcon" },
    { id: 6, name: "Profile" },
  ];
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

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: "7rem",
          bgcolor: "#AD8B73",
          position: "sticky",
          top: 0,
          boxSizing: "border-box",
          overflow: "hidden",
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
          sx={{ boxSizing: "border-box" }}
        >
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid
            item
            xs={3}
            sm={3}
            md={3}
            lg={3}
            sx={{ boxSizing: "border-box" }}
          >
            <Button startIcon={<LionIcon />} onClick={handleClick}></Button>
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
          sx={{ boxSizing: "border-box" }}
        >
          {list.map((item) => {
            return (
              <Grid key={item.id}>
                <Button
                  startIcon={item.logo ? iconMap[item.logo] : null}
                  sx={{ color: "#FFFBE9" }}
                >
                  {item.name}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default Header;

import {
  Box,
  Button,
  Drawer,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid2";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import { useState } from "react";
const Header = () => {
  const list = [
    { id: 1, name: "Shop" },
    { id: 2, name: "Start here" },
    { id: 3, name: "Resources" },
    { id: 4, name: "Book a call" },
  ];

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerBox = () => {
    return (
      <>
        <Box
          flex={1}
          sx={{
            width: {
              xs: "100vw",
              sm: "60vw",
              md: "40vw",
              lg: "30vw",
              xl: "30vw",
            },
            p: "20px 20px 0px 20px",
          }}
        >
          <Box></Box>
        </Box>
      </>
    );
  };
  return (
    <>
      <Grid
        container
        sx={{
          height: "60px",
          bgcolor: "white",
          position: "sticky",
          top: 0,
          boxSizing: "border-box",
          overflow: "hidden",
          borderBottom: "1px solid #c9cac7",
        }}
      >
        <Grid
          container
          size={{
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            size={{ xs: 12 }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {list.map((item) => {
                return (
                  <Button
                    sx={{ fontSize: "11px", minWidth: "90px", color: "black" }}
                    key={item.id}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Grid>
            {/* <Grid size={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3 }}></Grid> */}
          </Grid>
          <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", sm: "none" } }}>
            Rút gọn
          </Grid>
        </Grid>
        <Grid
          container
          size={{
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button sx={{ color: "black" }}>IDCO</Button>
        </Grid>
        <Grid
          container
          size={{
            xs: 4,
            sm: 4,
            md: 4,
            lg: 4,
            xl: 4,
          }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
            <Button sx={{ color: "black", fontSize: "11px" }}>Cart</Button>
            <Typography>1</Typography>
            <IconButton onClick={toggleDrawer(true)}>
              <DensityMediumRoundedIcon />
            </IconButton>
            <Box></Box>
          </Grid>
        </Grid>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
          <DrawerBox />
        </Drawer>
      </Grid>
    </>
  );
};
export default Header;

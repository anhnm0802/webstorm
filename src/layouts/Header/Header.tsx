import { useEffect, useState } from "react";
import { To, useNavigate } from "react-router-dom";
import instance from "../../service/api";
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DensityMediumRoundedIcon from "@mui/icons-material/DensityMediumRounded";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface listOption {
  id: number;
  nameOption: string;
}
interface listOptionShopAll {
  id: number;
  nameOptionShopAll: string;
}

const Header = () => {
  const list = [
    { id: 1, name: "Shop", to: "/home" },
    { id: 2, name: "Start here", to: "/cart" },
    { id: 3, name: "Resources", to: "/haha" },
    { id: 4, name: "Book a call", to: "/haha" },
  ];

  const navigate = useNavigate();
  const clickHeaderLeft = (prop: To) => {
    navigate(prop);
  };
  const [openCollapse, setOpenCollapse] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpenCollapse(!openCollapse);
  };
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const [option1, setOption1] = useState<listOption[]>([]);
  useEffect(() => {
    const getDataListOption = async () => {
      try {
        const res = await instance.get("/listoptiondrawer/First");
        setOption1(res.data);
      } catch (error) {
        console.log("lỗi dữ liệu lấy từ server", error);
      }
    };
    getDataListOption();
  }, []);
  const [option2, setOption2] = useState<listOption[]>([]);
  useEffect(() => {
    const getDataListOption = async () => {
      try {
        const res = await instance.get("/listoptiondrawer/notFirst");
        setOption2(res.data);
      } catch (error) {
        console.log("lỗi dữ liệu lấy từ server", error);
      }
    };
    getDataListOption();
  }, []);

  const [optionShopAll, setOptionShopAll] = useState<listOptionShopAll[]>([]);
  useEffect(() => {
    const getDataShopAll = async () => {
      try {
        const res = await instance.get("/option-shop-all/getAllOptionShop");
        setOptionShopAll(res.data);
      } catch (error) {
        console.log("Lỗi rồi, fix đi", error);
      }
    };
    getDataShopAll();
  }, []);
  const [countCart, setCountCart] = useState();

  const stateCountRedux = useSelector(
    (state: RootState) => state.appstate.reloadCart
  );
  useEffect(() => {
    const getDataCount = async () => {
      try {
        const resCount = await instance.get("/storage-cart/count");
        setCountCart(resCount.data);
      } catch (error) {
        console.log("Lỗi", error);
      }
    };
    getDataCount();
  }, [stateCountRedux]);

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
          <Box>
            <List sx={{ p: "0" }}>
              <ListItem sx={{ p: "0" }}>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={option1.nameOption} />
                  {openCollapse ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </ListItemButton>
              </ListItem>
              <Divider />
              <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {optionShopAll.map((item) => {
                    return (
                      <>
                        <ListItem sx={{ p: "0", pl: 4 }}>
                          <ListItemButton>
                            <ListItemText primary={item.nameOptionShopAll} />
                          </ListItemButton>
                        </ListItem>
                        <Divider variant="middle" />
                      </>
                    );
                  })}
                </List>
              </Collapse>
            </List>
            <List sx={{ p: "0" }}>
              {option2.map((item) => {
                return (
                  <>
                    <ListItem sx={{ p: "0" }}>
                      <ListItemButton>
                        <ListItemText primary={item.nameOption} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </Box>
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
                    onClick={() => clickHeaderLeft(item.to)}
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
            <Typography>{countCart}</Typography>
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

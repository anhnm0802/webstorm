import {
  Box,
  Button,
  Grid2,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import LogoGoogle from "../../../assets/icon/LogoGoogle";
import LogoFacebook from "../../../assets/icon/LogoFacebook";
import LogoLinkedIn from "../../../assets/icon/LogoLinkedIn";
import bgLogin from "../../assets/images/backgroundLogin.svg";
import logoLogin from "../../assets/images/logoChrist.svg";

import { useSelector } from "react-redux";
import { login } from "../../../redux/slices/authSlice";
import { useAppDispatch } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { PATH_NAME } from "../../../contants/pathName";
import { useNavigate } from "react-router-dom";
const Signin = () => {
  const dispatch = useAppDispatch();
  const [visiblePw, setVisiblePw] = useState(false);
  const handleClickShowPassword = () => {
    setVisiblePw(!visiblePw);
  };
  const list = [
    { id: 1, logo: <LogoGoogle />, name: "Google" },
    { id: 2, logo: <LogoFacebook />, name: "Facebook" },
    { id: 3, logo: <LogoLinkedIn />, name: "linkedin" },
  ];
  const [valueinput, setValueinput] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(
      login({
        userlog: valueinput.username,
        passlog: valueinput.password,
      })
    );
  };
  const isLogin = useSelector((state: RootState) => state.authen.isLogin);
  console.log(isLogin);
  // useEffect(() => {
  //   isLogin && navigate(PATH_NAME.ROOT);
  // }, [isLogin]);

  return (
    <>
      <Grid2 container sx={{ height: "100vh" }} justifyContent={"center"}>
        <Grid2
          item
          container
          xs={12}
          sm={10}
          md={8}
          lg={8}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundImage: `url(${bgLogin})` }}
        >
          <Grid2
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img
              src={logoLogin}
              alt="Logo"
              style={{
                maxWidth: "50%", // Đảm bảo ảnh không vượt quá khung
                height: "fit-content",
              }}
            />
            {/* <Box
              component="img"
              src={logoLogin}
              alt="Logo"
              sx={{
                maxWidth: "80%", // Điều chỉnh kích thước
                height: "auto",
              }}
            /> */}
          </Grid2>
          <Grid2
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                mx: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box width={"100%"} sx={{ mb: 2 }}>
                <TextField
                  sx={{
                    width: "100%",
                    my: 1,
                    backgroundColor: "rgba(227, 151, 151, 0.4)",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&:focus-within fieldset": {
                        borderColor: "transparent", // Khi nhấn vào TextField, thay đổi màu viền
                      },
                    },
                  }}
                  InputProps={{
                    style: {
                      border: "2px solid rgba(255, 255, 255, 0.5)", // Viền sáng hơn
                      borderRadius: "8px",
                    },
                  }}
                  value={valueinput.username}
                  onChange={(event) =>
                    setValueinput({
                      ...valueinput,
                      username: event.target.value,
                    })
                  }
                />

                <TextField
                  type={visiblePw ? "text" : "password"}
                  value={valueinput.password}
                  onChange={(event) =>
                    setValueinput({
                      ...valueinput,
                      password: event.target.value,
                    })
                  }
                  sx={{
                    width: "100%",
                    my: 1,
                    backgroundColor: "rgba(227, 151, 151, 0.4)",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "&:focus-within fieldset": {
                        borderColor: "transparent", // Khi nhấn vào TextField, thay đổi màu viền
                      },
                    },
                  }}
                  InputProps={{
                    style: {
                      border: "2px solid rgba(255, 255, 255, 0.5)", // Viền sáng hơn
                      borderRadius: "8px",
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {visiblePw ? (
                            <VisibilityOffOutlinedIcon />
                          ) : (
                            <VisibilityOutlinedIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
              </Box>
              <Button
                sx={{
                  border: "1px solid black",
                  color: "black",
                  width: "80%",
                  "&:hover": {
                    color: "black",
                    background: "#cccccc",
                  },
                  bgcolor: "rgba(255, 255, 255, 0.4)",
                  borderColor: "transparent",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Box display={"flex"} width={"100%"} alignItems={"center"}>
                <Box
                  flex={1}
                  sx={{ height: "0px", border: "1px solid black" }}
                ></Box>
                <Typography sx={{ mx: 2, my: 2 }}>Login with</Typography>
                <Box
                  flex={1}
                  sx={{ height: "0px", border: "1px solid black" }}
                ></Box>
              </Box>
              <Box
                width={"100%"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                {list.map((item) => {
                  return (
                    <Button
                      sx={{
                        border: "1px solid black",
                        color: "black",
                        width: "80%",
                        "&:hover": {
                          color: "black",
                          background: "#cccccc",
                        },
                        bgcolor: "rgba(255, 255, 255, 0.4)",
                        borderColor: "transparent",
                      }}
                      startIcon={item.logo}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Link
                  href="/"
                  sx={{ color: "black", fontWeight: "700" }}
                  underline="none"
                >
                  Forgot Password??
                </Link>
                <Link
                  href="/sign_up"
                  sx={{ color: "black", fontWeight: "700" }}
                  underline="none"
                >
                  Signup Accout
                </Link>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};
export default Signin;

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import FormLogin from "../../components/FormLogin";
import { Link, useNavigate } from "react-router-dom";
import LogoGoogle from "../../assets/icon/LogoGoogle";
import LogoFacebook from "../../assets/icon/LogoFacebook";
import LogoLinkedIn from "../../assets/icon/LogoLinkedIn";
import { useAppDispatch } from "../../redux/hook";
import { useEffect, useState } from "react";
import { login } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PATH_NAME } from "../../contants/pathName";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const Login = () => {
  const dispatch = useAppDispatch();
  const [hidden, setHidden] = useState(false);
  const handleHidden = () => {
    setHidden(!hidden);
  };
  const [valueinput, setValueinput] = useState({ username: "", password: "" });
  const handleLogin = () => {
    dispatch(
      login({
        userlog: valueinput.username,
        passlog: valueinput.password,
      })
    );
  };

  const navigate = useNavigate();
  const isLogin = useSelector((state: RootState) => state.authen.isLogin);
  useEffect(() => {
    isLogin && navigate(PATH_NAME.ROOT);
  }, [isLogin]);
  const theme = useTheme();
  return (
    <>
      <FormLogin>
        <Box
          className="HeaderLogin"
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography fontSize={"20px"}>Welcome</Typography>
            <Typography fontSize={"50px"}>Sign in</Typography>
          </Box>
          <Box>
            <Typography>No Account?</Typography>
            <Link
              to={PATH_NAME.SIGN_UP}
              style={{
                color: theme.palette.primary.main,
                textDecorationLine: "none",
                fontWeight: "700",
              }}
            >
              Sign up
            </Link>
          </Box>
        </Box>

        <Box
          className="TextLogin"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography>Enter your username or email address</Typography>
            <TextField
              fullWidth
              placeholder="Username or email address"
              InputProps={{
                style: { borderRadius: "9px" },
              }}
              value={valueinput.username}
              onChange={(event) =>
                setValueinput({ ...valueinput, username: event.target.value })
              }
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>Enter your Password</Typography>
            <TextField
              type={hidden ? "text" : "password"}
              fullWidth
              placeholder="Password"
              InputProps={{
                style: { borderRadius: "9px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleHidden}>
                      {hidden ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={valueinput.password}
              onChange={(event) =>
                setValueinput({ ...valueinput, password: event.target.value })
              }
            ></TextField>
            <Box sx={{ display: "flex" }}>
              <Box flex={1}></Box>
              <Link
                to={""}
                style={{
                  color: "black",
                  textDecorationLine: "none",
                  fontWeight: "700",
                }}
              >
                Forgot password
              </Link>
            </Box>
          </Box>
        </Box>
        <Box
          className="BtnLogin"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Button
            fullWidth
            sx={{ bgcolor: "#E48700", color: "white" }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Typography>OR</Typography>
          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <Button
              sx={{ flex: 1, bgcolor: "#FFF4E3", color: "black" }}
              startIcon={<LogoGoogle />}
            >
              Google
            </Button>
            <Button
              sx={{ color: "black", bgcolor: "#F6F6F6" }}
              // startIcon={<LogoFacebook />}
            >
              <LogoFacebook />
            </Button>
            <Button
              sx={{ color: "black", bgcolor: "#F6F6F6" }}
              // startIcon={<LogoLinkedIn />}
            >
              <LogoLinkedIn />
            </Button>
          </Box>
        </Box>
      </FormLogin>
    </>
  );
};
export default Login;

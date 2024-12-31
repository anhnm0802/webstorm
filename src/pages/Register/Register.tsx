import { Box, Button, TextField, Typography } from "@mui/material";
import FormLogin from "../../components/FormLogin";
import { Link } from "react-router-dom";
import { useState } from "react";

import { PATH_NAME } from "../../contants/pathName";
import instance from "../../service/api";
const Login = () => {
  const [valueinput, setValueinput] = useState({
    user: "",
    pass: "",
    fullname: "",
    contact: "",
  });
  const postData = async () => {
    try {
      const response = await instance.post("/user/createUser", {
        username: valueinput.user,
        password: valueinput.pass,
        fullname: valueinput.fullname,
        numberPhone: valueinput.contact,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignup = () => {
    postData();
    setValueinput({
      user: "",
      pass: "",
      fullname: "",
      contact: "",
    });
  };

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
            <Typography fontSize={"50px"}>Sign up</Typography>
          </Box>
          <Box>
            <Typography>Have Account?</Typography>
            <Link
              to={PATH_NAME.SIGN_IN}
              style={{
                color: "black",
                textDecorationLine: "none",
                fontWeight: "700",
              }}
            >
              Sign in
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
            <Typography>Enter your fullname</Typography>
            <TextField
              fullWidth
              placeholder="Username or email address"
              InputProps={{
                style: { borderRadius: "9px" },
              }}
              value={valueinput.fullname}
              onChange={(event) =>
                setValueinput({ ...valueinput, fullname: event.target.value })
              }
            ></TextField>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Box width={"100%"}>
              <Typography>User name</Typography>
              <TextField
                fullWidth
                placeholder="Username or email address"
                InputProps={{
                  style: { borderRadius: "9px" },
                }}
                value={valueinput.user}
                onChange={(event) =>
                  setValueinput({ ...valueinput, user: event.target.value })
                }
              ></TextField>
            </Box>
            <Box width={"100%"}>
              <Typography>Contact Number</Typography>
              <TextField
                fullWidth
                placeholder="Username or email address"
                InputProps={{
                  style: { borderRadius: "9px" },
                }}
                value={valueinput.contact}
                onChange={(event) =>
                  setValueinput({ ...valueinput, contact: event.target.value })
                }
              ></TextField>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography>Enter your Password</Typography>
            <TextField
              fullWidth
              placeholder="Password"
              InputProps={{
                style: { borderRadius: "9px" },
              }}
              value={valueinput.pass}
              onChange={(event) =>
                setValueinput({ ...valueinput, pass: event.target.value })
              }
            ></TextField>
          </Box>
        </Box>
        <Button
          fullWidth
          sx={{ bgcolor: "#E48700", color: "white" }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        {/* <Box
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
        </Box> */}
      </FormLogin>
    </>
  );
};
export default Login;

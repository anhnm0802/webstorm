import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Trans } from "react-i18next";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const Signin = () => {
  const [visiblePw, setVisiblePw] = useState(false);
  const handleClickShowPassword = () => {
    setVisiblePw(!visiblePw);
  };
  const [valueinput, setValueinput] = useState({ username: "", password: "" });
  const list = [
    { id: 1, name: "Google" },
    { id: 2, name: "Facebook" },
    { id: 3, name: "linkedin" },
  ];
  return (
    <>
      <Grid container sx={{ height: "100vh" }} justifyContent={"center"}>
        <Grid
          item
          container
          xs={12}
          sm={10}
          md={8}
          lg={8}
          component={Paper}
          elevation={6}
          square
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Logo
          </Grid>
          <Grid
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
                my: 3,
                mx: 3,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6">
                <Trans>Login</Trans>
              </Typography>
              <Box width={"100%"} sx={{ mt: 2, mb: 2 }}>
                <Typography sx={{ mb: 1 }}>Email or phone number</Typography>
                <TextField
                  sx={{ width: "100%", my: 1 }}
                  label="username"
                  value={valueinput.username}
                  onChange={(event) =>
                    setValueinput({
                      ...valueinput,
                      username: event.target.value,
                    })
                  }
                />
                <Typography sx={{ mb: 1 }}>Password</Typography>
                <TextField
                  sx={{ width: "100%", my: 1 }}
                  InputProps={{
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
                  type={visiblePw ? "text" : "password"}
                  label="Password"
                  value={valueinput.password}
                  onChange={(event) =>
                    setValueinput({
                      ...valueinput,
                      password: event.target.value,
                    })
                  }
                ></TextField>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Link
                    href="/"
                    sx={{ color: "black", fontWeight: "700" }}
                    underline="none"
                  >
                    Forgot Password??
                  </Link>
                  <Link
                    href="/"
                    sx={{ color: "black", fontWeight: "700" }}
                    underline="none"
                  >
                    Signup Accout
                  </Link>
                </Box>
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
                }}
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
                {list.map((item: { id: number; name: string }) => {
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
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Signin;

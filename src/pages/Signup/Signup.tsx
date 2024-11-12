import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
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
import Checkbox from "@mui/material/Checkbox";
import client from "../../service/api";

const Signup = () => {
  const [visiblePw, setVisiblePw] = useState(false);
  const handleClickShowPassword = () => {
    setVisiblePw(!visiblePw);
  };
  const [valueinput, setValueinput] = useState({
    username: "",
    password: "",
    confirmvalue: "",
  });
  const Handlesubmit = () => {
    const userData = {
      username: valueinput.username,
      password: valueinput.password,
    };
    client
      .post("/sign_up", userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setValueinput({ username: "", password: "", confirmvalue: "" });
  };
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
            <Typography variant="h1">Logo</Typography>
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
                <Typography sx={{ mb: 1 }}>Confirm Password</Typography>
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
                  inputProps={{ minLength: 8 }}
                  type={visiblePw ? "text" : "password"}
                  label="Confirm Password"
                  value={valueinput.confirmvalue}
                  onChange={(event) =>
                    setValueinput({
                      ...valueinput,
                      confirmvalue: event.target.value,
                    })
                  }
                ></TextField>
                <Link
                  href="/"
                  sx={{ color: "black", fontWeight: "700" }}
                  underline="none"
                >
                  Have account???
                </Link>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="By creating an account, I agree to our Term of use and Privacy Policy"
                />
              </FormGroup>
              <Button
                sx={{
                  bgcolor: "gray",
                  color: "white",
                  width: "100%",
                  "&:hover": {
                    color: "black",
                    background: "#cccccc",
                  },
                }}
                onClick={Handlesubmit}
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
                  gap: 1.5,
                }}
              >
                {list.map((item: { id: number; name: string }) => {
                  return (
                    <Button
                      sx={{
                        bgcolor: "gray",
                        color: "white",
                        width: "100%",
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
export default Signup;

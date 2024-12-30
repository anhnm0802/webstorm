import { Box, Grid2, Paper } from "@mui/material";
const Login = () => {
  return (
    <>
      <Box
        width={"100vw"}
        height={"100vh"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Paper
          sx={{
            bgcolor: "white",
            width: "40%",
            height: "80%",
            position: "absolute",
            borderRadius: "25px",
          }}
        ></Paper>
        <Box width={"50%"} height={"100%"} sx={{ bgcolor: "#ECBC76" }}>
          <Box
            component="img"
            src="/src/assets/images/Saly-3.png"
            alt="Example PNG"
            sx={{
              width: "100%", // Chiều rộng đầy đủ của thẻ chứa
              height: "auto", // Giữ tỷ lệ gốc
              maxWidth: "300px", // Tùy chỉnh kích thước tối đa
            }}
          />
        </Box>
        <Box
          width={"50%"}
          height={"100%"}
          sx={{
            bgcolor: "#FFFEF9",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/src/assets/images/11a7c18d189607d5e25f5250d7724f34.png"
            alt="Example PNG"
            sx={{
              width: "100%", // Chiều rộng đầy đủ của thẻ chứa
              height: "auto", // Giữ tỷ lệ gốc
              maxWidth: "300px", // Tùy chỉnh kích thước tối đa
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Login;

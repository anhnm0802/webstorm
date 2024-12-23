import { Box, Typography } from "@mui/material";
import LogoDesign from "../../assets/icon/LogoDesign";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import bgImage from "../../assets/github-mark.svg";
const CardCourse = () => {
  return (
    <>
      <Box
        m={3}
        sx={{
          width: "374px",
          height: "617px",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "100%",
          }}
        >
          <Box
            sx={{
              borderRadius: "20px",
              border: "1px solid #90AEAD",
              width: "100%",
              height: "239px",

              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover", // Thêm thuộc tính backgroundSize
              backgroundPosition: "center",
            }}
          ></Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LogoDesign />
              <Typography sx={{ ml: "10px" }}>Design</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeOutlinedIcon />
              <Typography sx={{ ml: "10px" }}>3 Month</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              AWS Certified solutions Architect
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
              eiusmod tempor
            </Typography>
          </Box>
          <Box flex={1}></Box>
          <Box display={"flex"} alignItems={"center"} bottom={0}>
            <Box
              className="avt"
              sx={{
                width: "44px",
                height: "44px",
                borderRadius: "22px",
                bgcolor: "#C1A4D9",
              }}
            ></Box>
            <Typography>Name</Typography>
            <Box flex={1}></Box>
            <Typography sx={{ mr: "10px", textDecoration: "line-through" }}>
              $Value
            </Typography>
            <Typography>Value</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CardCourse;

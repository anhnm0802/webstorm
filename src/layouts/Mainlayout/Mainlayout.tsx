import { Box } from "@mui/material";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Mainlayout = () => {
  return (
    <>
      <Box
        sx={{
          maxHeight: "fit-content",
          position: "relative",
        }}
      >
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};
export default Mainlayout;

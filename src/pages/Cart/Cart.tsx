import { Box, Button, colors, IconButton, Typography } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import bgImage from "../../assets/images/github-mark.svg";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import instance from "../../service/api";
import { toggleSetReload } from "../../redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
interface listProduct {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  info: string;
  count: number;
}
const Cart = () => {
  const [isEdit, setIsEdit] = useState(true);
  const NohaveData = () => {
    return (
      <Grid padding={"50px"} sx={{ height: "95vh" }}>
        <Box
          py={"20px"}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottom: "1px solid rgba(50, 50, 50, 0.2)",
          }}
        >
          My cart
        </Box>
        <Box
          py={"175px"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "1px solid rgba(50, 50, 50, 0.2)",
          }}
        >
          <Typography fontSize={"40px"}> Cart is empty</Typography>
          <Link
            href={"/home"}
            underline="hover"
            sx={{
              color: "black",
              fontWeight: 600,
            }}
          >
            Browse More Tools
          </Link>
        </Box>
      </Grid>
    );
  };
  /////moe
  const navigate = useNavigate();
  const handleClickImg = () => {
    navigate("/home");
  };

  const HaveData = () => {
    const [scount, setScount] = useState<Record<number, number>>({});
    const upState = (id: number) => {
      setScount((prev) => ({
        ...prev,
        [id]: (prev[id] || 1) + 1,
      }));
    };
    const downState = (id: number) => {
      setScount((prev) => ({
        ...prev,
        [id]: Math.max((prev[id] || 1) - 1, 0),
      }));
    };

    const [data, setData] = useState<listProduct[]>([]);
    const [statePrice, setStatePrice] = useState<Record<number, number>>({});
    const stateCountRedux = useSelector(
      (state: RootState) => state.appstate.reloadCart
    );
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await instance.get("/storage-cart/all");
          setData(res.data);
          console.log(res.data);
          if (res.data) {
            const prices = res.data.reduce(
              (acc: Record<number, number>, product: listProduct) => {
                acc[product.id] = product.price; // Lưu giá sản phẩm theo id
                return acc;
              },
              {}
            );
            setStatePrice(prices);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, [stateCountRedux]);

    const [totalPrice, setTotalPrice] = useState<Record<number, number>>({}); // Tổng giá của các sản phẩm đã chọn
    useEffect(() => {
      const updatedTotalPrice: Record<number, number> = {}; // Tạo đối tượng mới để lưu tổng giá
      for (const id in scount) {
        if (scount[id] && statePrice[id]) {
          updatedTotalPrice[id] = statePrice[id] * scount[id]; // Tính tổng giá cho mỗi sản phẩm
        }
      }
      setTotalPrice(updatedTotalPrice);
    }, [scount, statePrice]);

    const [totalSumPrice, setTotalSumPrice] = useState(0);
    useEffect(() => {
      const total = Object.values(totalPrice).reduce(
        (acc, price) => acc + price,
        0
      );
      setTotalSumPrice(total);
    }, [totalPrice]);

    const [dataID, setDataID] = useState(1);
    const [testScount, setTestScount] = useState(1);
    const dispatch = useDispatch();
    const handleClickTest = async () => {
      try {
        const res = await instance.post("/storage-cart/add", {
          productId: dataID, // Ép kiểu thành số nguyên
          quantity: testScount,
        });
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      dispatch(toggleSetReload());
    };
    const handleDelete = async () => {
      try {
        const res = await instance.delete(
          `/storage-cart/${1}` // Gửi tham số qua params
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
      dispatch(toggleSetReload());
    };

    return (
      <Grid
        container
        minHeight={"95vh"}
        px={{ xs: "50px", sm: "50px", md: "50px", lg: "50px", xl: "10vw" }}
        py={{ xs: "50px", sm: "50px", md: "50px", lg: "50px", xl: "50px" }}
        display={"flex"}
      >
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
          <Box
            sx={{
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgb(151, 151, 149)",
                fontSize: "25px",
                lineHeight: 3,
              }}
            >
              My Cart
            </Typography>
            <Link
              href={"/home"}
              underline="hover"
              sx={{
                color: "rgb(151, 151, 149)",
              }}
            >
              Browse More Tools
            </Link>
            <Button onClick={handleClickTest}>CLick Here For Test</Button>
          </Box>
          {data.map((item) => {
            return (
              <Box
                py={"20px"}
                display={"flex"}
                alignItems={"center"}
                gap={1}
                key={item.id}
              >
                <Box
                  flex={1}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Box display={"flex"} gap={3}>
                    <Link href="/home" sx={{ width: "50px", height: "50px" }}>
                      <Box
                        component="img"
                        src={bgImage}
                        alt="GitHub Logo"
                        sx={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                    <Box>
                      <Typography>{item.name}</Typography>
                      <Typography>$ {item.price}</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px solid #828382",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{ color: "black" }}
                        onClick={() => downState(item.id)}
                      >
                        -
                      </Button>
                      <Typography>{scount[item.id] || 0}</Typography>
                      <Button
                        sx={{ color: "black" }}
                        onClick={() => upState(item.id)}
                      >
                        +
                      </Button>
                    </Box>
                    <Typography>Total Price: {totalPrice[item.id]}</Typography>
                  </Box>
                </Box>
                <Box>
                  <IconButton onClick={handleDelete}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>
            );
          })}
        </Grid>
        <Grid size={{ lg: 1, xl: 1 }}></Grid>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },

              borderBottom: "1px solid rgb(151, 151, 149)",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgb(151, 151, 149)",
                fontSize: "25px",
                lineHeight: 3,
              }}
            >
              Order Summary
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Subtotal</Typography>
              <Typography>{totalSumPrice}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  };

  ///return goc moe
  return <>{isEdit ? <HaveData /> : <NohaveData />}</>;
};
export default Cart;

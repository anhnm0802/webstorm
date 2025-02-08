import { Box, Button, Typography } from "@mui/material";
import CardCourse from "../../components/CardCourse";
import instance from "../../service/api";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
interface Course {
  id: number;
  nameCourse: string;
  description: string;
  field: string;
  price: number;
  priceSale: number;
  duration: string;
  author?: {
    fullName: string;
    avatar: any;
  };
}
const Home = () => {
  const [dataTable, setDataTable] = useState<Course[]>([]);
  useEffect(() => {
    const getDataCourse = async () => {
      try {
        const response = await instance.get("/course");
        setDataTable(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    getDataCourse();
  }, []);
  const listBtn = ["Business Tools", "Websites", "Semi-Custom Brands"];
  return (
    <>
      <Grid container padding={"50px"}>
        <Grid
          container
          size={{ xs: 12, sm: 12, md: 12, lg: 3, xl: 3 }}
          sx={{
            position: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "sticky",
              xl: "sticky",
            },
            height: "fit-content",
            top: "110px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography fontSize={"40px"} sx={{ wordBreak: "break-word" }}>
            {" "}
            Shop Business Templates
          </Typography>
          {listBtn.map((item, index) => (
            <Button
              key={index}
              sx={{
                width: "250px",
                textTransform: "none",
                border: "1px solid black",
                borderRadius: "25px",
                color: "black",
              }}
            >
              {item}
            </Button>
          ))}
        </Grid>
        <Grid container size={{ xs: 12, sm: 12, md: 12, lg: 9, xl: 9 }}>
          <Grid></Grid>
          {dataTable.map((item) => {
            return (
              <CardCourse
                key={item.id}
                name={item.nameCourse}
                des={item.description}
                field={item.field}
                price={item.price}
                priceSale={item.priceSale}
                duration={item.duration}
                authorCourse={item.author?.fullName}
                avatar={item.author?.avatar}
              />
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};
export default Home;

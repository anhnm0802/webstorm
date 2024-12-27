import { Box } from "@mui/material";
import CardCourse from "../../components/CardCourse";
import instance from "../../service/api";
import { useEffect, useState } from "react";

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

  return (
    <>
      <Box
        sx={{
          height: "fit-content",
          bgcolor: "transparent",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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
      </Box>
    </>
  );
};
export default Home;

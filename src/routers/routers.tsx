import { createBrowserRouter } from "react-router-dom";
import { PATH_NAME } from "../contants/pathName";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";

const routers = createBrowserRouter([
  {
    path: PATH_NAME.SIGN_IN,
    element: <Signin />,
  },
  {
    path: PATH_NAME.SIGN_UP,
    element: <Signup />,
  },
  {
    path: PATH_NAME.ROOT,
    element: <Mainlayout />,
    children: [
      {
        path: PATH_NAME.HOME,
        element: <Home />,
      },
    ],
  },
]);
export default routers;

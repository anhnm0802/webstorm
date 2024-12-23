import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATH_NAME } from "../contants/pathName";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import ProtectedRouter from "./protectedRouter";

const routers = createBrowserRouter([
  {
    index: true,
    element: <Navigate to={PATH_NAME.SIGN_IN} replace />,
  },
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
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
      },
    ],
  },
]);
export default routers;

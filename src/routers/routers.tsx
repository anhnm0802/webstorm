import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATH_NAME } from "../contants/pathName";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import ProtectedRouter from "./protectedRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routers = createBrowserRouter([
  {
    path: PATH_NAME.SIGN_IN,
    element: <Login />,
  },
  {
    path: PATH_NAME.SIGN_UP,
    element: <Register />,
  },
  {
    path: PATH_NAME.ROOT,
    element: (
      <ProtectedRouter>
        <Mainlayout />
      </ProtectedRouter>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={PATH_NAME.HOME} replace />,
      },
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

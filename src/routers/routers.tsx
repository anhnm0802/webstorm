import { createBrowserRouter } from "react-router-dom";
import { PATH_NAME } from "../contants/pathName";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup";
import Mainlayout from "../layouts/Mainlayout";

const routers = createBrowserRouter([
    {
        path:PATH_NAME.SIGN_IN,
        element: <Signin/>
    },
    {
        path:PATH_NAME.SIGN_UP,
        element: <Signup/>
    },
    {
        path:PATH_NAME.ROOT,
        element: <Mainlayout/>
    }

])
export default routers
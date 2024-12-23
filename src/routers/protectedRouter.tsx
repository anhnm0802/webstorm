import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, useLocation } from "react-router-dom";
import { PATH_NAME } from "../contants/pathName";

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const isLogin = useSelector((state: RootState) => state.authen.isLogin);
  const location = useLocation();
  if (!isLogin) {
    return <Navigate to={PATH_NAME.SIGN_IN} state={location} replace />;
  }
  return children;
};
export default ProtectedRouter;

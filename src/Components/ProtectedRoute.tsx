import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const { userLogin } = useSelector((store: any) => store.user);

  if (!userLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;

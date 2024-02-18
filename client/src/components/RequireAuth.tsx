import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
type Props = {
  role?: string[];
};
const RequireAuth: React.FC<Props> = () => {
  const location = useLocation();
  const { user } = useAuth();
  return  user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

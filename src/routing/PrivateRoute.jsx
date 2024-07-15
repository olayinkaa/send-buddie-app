import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute() {
    const location = useLocation();
    const {
        authState: { isAuthenticated },
    } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;

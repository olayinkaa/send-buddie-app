import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PublicRoute() {
    const location = useLocation();

    const {
        authState: { isAuthenticated },
    } = useAuth();
    return isAuthenticated ? <Navigate to="/welcome-profile" state={{ from: location }} replace /> : <Outlet />;
}

export default PublicRoute;

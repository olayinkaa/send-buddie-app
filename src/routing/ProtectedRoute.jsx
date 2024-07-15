import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function ProtectedRoute() {
    const location = useLocation();
    const {
        authState: { isAuthenticated, profileUpdated },
    } = useAuth();
    return isAuthenticated && profileUpdated ? (
        <Outlet />
    ) : (
        <Navigate to="/dashboard" state={{ from: location }} replace />
    );
}

export default ProtectedRoute;

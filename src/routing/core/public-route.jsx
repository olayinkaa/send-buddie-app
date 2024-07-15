/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../../hooks";
import { useSelector } from "react-redux";

/**
 * 
 */
export default function PublicRoute({ children }) {
    const location = useLocation();
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
    const profileUpdated = useSelector((state) => state.authReducer.profileUpdated);

    if (isAuthenticated) {
        return <Navigate to="/dashboard" state={{ from: location }} replace />;
    }

    if (isAuthenticated && profileUpdated===false) {
        return <Navigate to="/welcome-profile" state={{ from: location }} replace />;
    }

    return children;
}

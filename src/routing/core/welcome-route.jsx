/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
// import { userRoles } from './constants';
import { useAuth } from "../../hooks";

export default function WelcomeRoute({ children }) {
    const location = useLocation();

    const {
        authState: { isAuthenticated, profileUpdated },
    } = useAuth();

    if (isAuthenticated && !profileUpdated) {
        return <Navigate to="/welcome-profile" state={{ from: location }} replace />;
    }

    return children;
}

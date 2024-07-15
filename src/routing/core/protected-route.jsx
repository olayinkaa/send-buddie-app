/* eslint-disable react/prop-types */
// import { useState, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useIdleTimer } from "react-idle-timer";
import { logout } from "../../redux/reducers/auth-splice";
import config from "../../config";

function ProtectedRoute({ children }) {
    // const [timeVal, setTimeVal] = useState(null);
    const location = useLocation();
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated);
    const profileUpdated = useSelector((state) => state.authReducer.profileUpdated);
    const businessDocumentUpdated = useSelector((state) => state.authReducer.businessDocumentUpdated);
    const role = useSelector((state) => state.authReducer.role);
    /**
     * Idle time implementation
     */
    const onIdle = () => {
        dispatch(logout());
    };
    // eslint-disable-next-line no-unused-vars
    const { getRemainingTime} = useIdleTimer({
        timeout: config.idleTimeOut,
        onIdle,
    });
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTimeVal(getRemainingTime());
    //     }, 1000);
    //     return ()=> clearInterval(interval)
    // }, [getRemainingTime]);

    /**
     * TODO: remove the console.log on line 40
     */
    // console.log("remaining time", Math.ceil(timeVal/1000))

    /**
     * 
     */
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    /**
     * 
     */
    if (isAuthenticated && !profileUpdated) {
        return <Navigate to="/welcome-profile" state={{ from: location }} replace />;
    }
    /**
     * 
     */
    if (
        isAuthenticated &&
        profileUpdated &&
        role === "BUSINESS ACCOUNT" &&
        businessDocumentUpdated !== null &&
        businessDocumentUpdated !== undefined &&
        businessDocumentUpdated === false
    ) {
        return <Navigate to="/kyc-upload" state={{ from: location }} replace />;
    }

    return children;
}

export default ProtectedRoute;

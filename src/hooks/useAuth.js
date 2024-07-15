import { useDispatch, useSelector } from "react-redux";
import { logout, setAuthenticationDetails } from "../redux/reducers/auth-splice";

const useAuth = () => {
    const dispatch = useDispatch();
    const authState = useSelector((state) => ({ ...state.authReducer }));
    return {
        authState,
        logout,
        setAuthenticationDetails,
        dispatch,
    };
};

export default useAuth;

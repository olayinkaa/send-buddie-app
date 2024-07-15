import { useDispatch, useSelector } from "react-redux";
import { setLoginUserInfo  } from "../redux/reducers/loginUser-slice";

const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => ({ ...state.userReducer }));
    return {
        user,
        setLoginUserInfo, 
        dispatch,
    };
};

export default useAuth;

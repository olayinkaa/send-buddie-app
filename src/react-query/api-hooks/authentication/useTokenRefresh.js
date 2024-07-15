import { useMutation } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
// import { useNavigate } from "react-router-dom";
import { AuthHTTP, setAuthTokenHTTP, notification } from "../../../utils";
import { useAuth } from "../../../hooks";

const SUCCESS_STATUS = [200, "200"];
const ERROR_STATUS = [400, 401];

const postRefreshToken = async (requestParams) => {
    try {
        const response = await AuthHTTP.get(`/api/v1/refresh`, {
            params: {
                ...requestParams,
            },
        });
        return response;
    } catch (err) {
        return Promise.reject()
    }
};

const useTokenRefresh = () => {
    const { dispatch, setAuthenticationDetails } = useAuth();
    const Mutation = useMutation(postRefreshToken, {
        onSuccess: (res) => {
            const { status, data, response: errorResponse } = res;
            if (SUCCESS_STATUS?.includes(status)) {
                const { profileUpdated, businessDocumentUpdated, roles, permissions, token, ...rest } = data;
                const decodedToken = jwtDecode(token);
                setAuthTokenHTTP(token);
                const sendToStore = {
                    decodedToken,
                    token,
                    profileUpdated,
                    businessDocumentUpdated,
                    roles: roles[0], // select the first element from the array
                    permissions,
                    rest,
                };
                localStorage.setItem("sid", token);
                dispatch(setAuthenticationDetails(sendToStore));
            }

            if (ERROR_STATUS?.includes(errorResponse?.status)) {
                notification({ message: res.response?.data.message, status: "error", direction: "top-right" });
            }
        }
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        refreshUserToken: mutate,
        isRefreshingUserToken: isLoading,
        refreshTokenResponse: data,
    };
};

export default useTokenRefresh;

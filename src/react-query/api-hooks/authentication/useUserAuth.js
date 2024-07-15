import { useMutation } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import { HTTP, setAuthTokenHTTP } from "@/utils";
import { SendBuddieToaster } from "@/components/@ui-kits";
import { useAuth } from "@/hooks";

const postLogin = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/auth`, requestPayload);
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
};

const useUserAuth = () => {
    const { dispatch, setAuthenticationDetails } = useAuth();
    const Mutation = useMutation(postLogin, {
        onSuccess: (res) => {
            const { profileUpdated, businessDocumentUpdated, roles, permissions, token, ...rest } = res.data;
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
            // eslint-disable-next-line no-unused-vars
            dispatch(setAuthenticationDetails(sendToStore));
        },
        onError: (err) => {
            SendBuddieToaster({ message: err.response?.data.message, status: "error", direction: "top-right" });
        },
    });

    const { mutate, data, isLoading } = Mutation;

    return {
        loginUser: mutate,
        isLogingUser: isLoading,
        loginUserResponse: data,
    };
};

export default useUserAuth;

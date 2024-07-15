import { useMutation } from "@tanstack/react-query";
import { HTTP } from "../../../utils";

const postResetPassword = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/forgotpassword`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const useResetPassword = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postResetPassword, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading} = Mutation;
    return {
        resetPassword:mutate,
        isResettingPassword:isLoading,
        resetPasswordResponse:data,
    };
};

export default useResetPassword;

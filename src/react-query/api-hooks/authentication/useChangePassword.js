import { useMutation } from "@tanstack/react-query";
import { HTTP } from "../../../utils";

const postChangePassword = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/save-reset-password`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
};

const useChangePassword = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postChangePassword, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading} = Mutation;
    return {
        changePassword:mutate,
        isChangingPassword:isLoading,
        changePasswordResponse:data,
    };
};

export default useChangePassword;

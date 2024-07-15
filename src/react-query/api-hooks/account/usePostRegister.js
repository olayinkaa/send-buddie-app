import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/utils";

const postRegister = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/account/register`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const usePostRegister = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postRegister, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading} = Mutation;
    return {
        registerUser:mutate,
        isRegisteringUser:isLoading,
        registerUserResponse:data,
    };
};

export default usePostRegister;

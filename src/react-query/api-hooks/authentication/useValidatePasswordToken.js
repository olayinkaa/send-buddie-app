import { useMutation } from "@tanstack/react-query";
import { HTTP } from "../../../utils";

const postValidatePasswordToken = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/validate-password-token`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const useValidatePasswordToken = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postValidatePasswordToken, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading} = Mutation;
    return {
        validatePasswordToken:mutate,
        isValidatingPasswordToken:isLoading,
        validatePasswordTokenResponse:data,
    };
};

export default useValidatePasswordToken;

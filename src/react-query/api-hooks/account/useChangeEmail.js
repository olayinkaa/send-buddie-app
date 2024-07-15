import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/utils";

const changeEmail = async (requestPayload) => {
    try {
        const response = await AuthHTTP.post(`/api/v1/account/change-email`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const useChangeEmail = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(changeEmail, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;

    return {
        changeEmail: mutate,
        isChangingEmail: isLoading,
        changeEmailResponse: data,
    };
};

export default useChangeEmail;

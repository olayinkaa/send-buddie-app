import { useMutation } from "@tanstack/react-query";
import { HTTP } from "../../../utils";

const getRegistrationToken = async ({ email }) => {
    try {
        const response = await HTTP.get(`/api/v1/account/resend-token`, {
            params: {
                email,
            },
        });
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
};

const useResendRegistrationToken = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(getRegistrationToken, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        resendRegistrationToken: mutate,
        isResendingRegistrationToken: isLoading,
        resendRegistrationTokenResponse: data,
    };
};

export default useResendRegistrationToken;

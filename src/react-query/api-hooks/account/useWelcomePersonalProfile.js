import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "../../../utils";

const postPersonalProfile = async (requestPayload) => {
    try {
        const response = await AuthHTTP.post(`/api/v1/account/welcome-profile`, requestPayload);
        return response;
    } catch (error) {
        return error;
    }
};

const useWelcomePersonalProfile= ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postPersonalProfile, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        createPersonalProfile: mutate,
        isCreatingPersonalProfile: isLoading,
        createPersonalProfileResponse: data,
    };
};

export default useWelcomePersonalProfile;

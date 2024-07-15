import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "../../../utils";

const postBusinessProfile = async (requestPayload) => {
    try {
        const response = await AuthHTTP.post(`/api/v1/account/welcome-profile-business`, requestPayload);
        return response;
    } catch (error) {
        return error;
    }
};

const useWelcomeBusinessProfile = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postBusinessProfile, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;

    return {
        createBusinessProfile: mutate,
        isCreatingBusinessProfile: isLoading,
        createBusinessProfileResponse: data,
    };
};

export default useWelcomeBusinessProfile;

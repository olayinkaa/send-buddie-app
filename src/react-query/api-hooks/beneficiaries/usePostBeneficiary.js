import { useMutation } from "@tanstack/react-query";
// import queryKeys from "../../constants";
import { AuthHTTP } from "../../../utils";

const postBeneficiaries = async (requestPayload) => {
    try {
        const response = await AuthHTTP.post(`/api/v1/beneficiaries/beneficiaries`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const usePostBeneficiary = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postBeneficiaries, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        createBeneficiary:mutate,
        isCreatingBeneficiary:isLoading,
        createBeneficiaryResponse:data
    };
};

export default usePostBeneficiary;

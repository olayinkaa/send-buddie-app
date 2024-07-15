import { useMutation } from "@tanstack/react-query";
// import queryKeys from "../../constants";
import { AuthHTTP } from "../../../utils";

const removeBeneficiary = async (uuid) => {
    try {
        const response = await AuthHTTP.delete(`/api/v1/beneficiaries/beneficiaries/{uuid}`,{
            params:{
                uuid
            }
        });
        return response;
    } catch (error) {
        return error;
    }
};

const useDeleteBeneficiary = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(removeBeneficiary, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        deleteBeneficiary:mutate,
        isDeletingBeneficiary:isLoading,
        deleteBeneficiaryResponse:data
    };
};

export default useDeleteBeneficiary;

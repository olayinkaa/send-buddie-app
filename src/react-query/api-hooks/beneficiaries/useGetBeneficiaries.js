import { useQuery } from "@tanstack/react-query";
import queryKeys from "../../constants";
import { AuthHTTP } from "../../../utils";

const getBeneficiaries = async () => {
    try {
        const res = await AuthHTTP.get(`/api/v1/beneficiaries`);
        return res;
    } catch (error) {
        return error;
    }
};

const useGetBeneficiaries = () => {
    const { data, isLoading } = useQuery(
        [queryKeys.GET_BENEFICIARIES],
        getBeneficiaries,
    );

    return {
        beneficiaries:data?.data?.sort((a,b)=> b.id - a.id),
        topRecentBeneficiaries: data?.data?.sort((a,b)=> b.id - a.id)?.slice(0,4),
        isLoadingBeneficiaries:isLoading,
    };
};

export default useGetBeneficiaries;

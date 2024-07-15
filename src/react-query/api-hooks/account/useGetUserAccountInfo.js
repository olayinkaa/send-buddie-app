// import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "@/react-query/constants";
import { AuthHTTP } from "@/utils";
/**
 *
 * @param {object} requestParams - r
 * @returns
 */
const getUserAccountInfo = async () => {
    try {
        const res = await AuthHTTP.get(`/api/v1/account/user-accounts`);
        return res;
    } catch (error) {
        return Promise.reject(error)
    }
};

const useGetUserAccountInfo = () => {
    const fallback = [];
    const { data = fallback, isLoading } = useQuery(
        [queryKeys.GET_USER_ACCOUNT_INFO],
        getUserAccountInfo,
        {
            staleTime: 1000 * 60 * 0, // 5 minutes
        },
    );
    return {
        UserAccountResponse: data?.data?.[0],
        isFetchingUserAccountResponse:isLoading,
    };
};

export default useGetUserAccountInfo;

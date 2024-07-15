// import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "../../constants";
import { AuthHTTP } from "../../../utils";
/**
 *
 * @param {object} requestParams - r
 * @returns
 */
const getLoggedInUserAccount = async () => {
    try {
        const res = await AuthHTTP.get(`/api/v1/account`);
        return res;
    } catch (error) {
        return error;
    }
};

const useLoggedInUserAccount = () => {
    const fallback = [];
    const { data = fallback, isLoading } = useQuery(
        [queryKeys.GET_LOGGED_IN_USER_ACCOUNT],
        getLoggedInUserAccount,
        {
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    );
    return {
        loggedInUserResponse: data,
        isFetchingLoggedInUserResponse:isLoading,
    };
};

export default useLoggedInUserAccount;

// import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "../../constants";
import { HTTP } from "../../../utils";

/**
 *
 * @param {object} requestParams - region
 * @returns
 */
const getBankByCountryCode = async (countryCode) => {
    try {
        const res = await HTTP.get(`/api/v1/miscellaneous/banks/${countryCode}`);
        return res;
    } catch (error) {
        return Promise.reject(error);
    }
};

const useGetBankByCountryCode = ({ countryCode = "", enabled, select } = {}) => {
    const fallback = [];
    const { data = fallback, isLoading } = useQuery(
        [queryKeys.GET_BANK_BY_COUNTRY_CODE, countryCode],
        () => getBankByCountryCode(countryCode),
        {
            select,
            enabled,
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    );
    return {
        banks: data,
        isLoadingBank: isLoading,
    };
};

export default useGetBankByCountryCode;

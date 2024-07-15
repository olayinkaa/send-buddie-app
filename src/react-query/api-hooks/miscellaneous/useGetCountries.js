// import { useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import queryKeys from "../../constants";
import { HTTP } from "../../../utils";

/**
 *
 * @param {object} requestParams - region
 * @returns
 */
const getCountriesByParameters = async (requestParams) => {
    try {
        const res = await HTTP.get(`/api/v1/miscellaneous/countries`, {
            params: {
                ...requestParams,
            },
        });
        return res;
    } catch (error) {
        return error;
    }
};

const useGetCountries = ({paramsObj = {}, select}={}) => {
    const fallback = [];
    const { data = fallback, isLoading } = useQuery(
        [queryKeys.GET_COUNTRIES, ...Object.values(paramsObj)],
        () => getCountriesByParameters(paramsObj),
        {
            select,
            staleTime: 1000*60*5 // 5 minutes
        },
    );
    return {
        countries: data,
        isLoadingCountries:isLoading,
    };
};

export default useGetCountries;

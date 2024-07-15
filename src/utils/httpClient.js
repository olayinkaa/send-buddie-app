import axios from "axios";
import appConfig from "../config";

const token = localStorage.getItem("sid");

// PUBLIC HTTP client
export const HTTP = axios.create({
    baseURL: appConfig .baseURL,
    timeout: appConfig .httpTimeout,
});

// Authenticated HTTP client : for request that require accessToken
const AuthHTTP = axios.create({
    baseURL: appConfig .baseURL,
    timeout: appConfig .httpTimeout,
});

AuthHTTP.interceptors.request.use(
    async (config) => {
        if (token !== null && token !== undefined && token) {
			// eslint-disable-next-line no-param-reassign
			config.headers.Authorization =  token ?`Bearer ${token}` : "";
			return config;
		}
        return config;
    },
    (err) => {
        return Promise.reject(err);
    },
);

AuthHTTP.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        return Promise.reject(err);
    },
);

export default AuthHTTP;

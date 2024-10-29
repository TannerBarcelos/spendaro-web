import { useAuthStore } from "@/stores/auth-store";
import axios, { AxiosError } from "axios";
import { getTokensFromLocalStorage, setTokensToLocalStorage } from "./utils";

export type CommonApiErrorResponse = AxiosError<{
  error: string
  message: string
  details: {
    issues: string[],
    method: string,
    stack?: string
    url: string
  }
}>

const commonHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
}

const commonAxionConfig = {
  baseURL: "/api/v1",
  timeout: 5_000,
}

export const authAxiosInstance = axios.create({...commonAxionConfig, headers: {...commonHeaders}});

const axiosInstance = axios.create({
  ...commonAxionConfig,
  headers: {
    ...commonHeaders,
    Authorization: `Bearer ${getTokensFromLocalStorage().accessToken ?? ""}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is 403 Forbidden and it's not the auth request itself, and also prevent retry loops
    if (error.response?.status === axios.HttpStatusCode.Forbidden && !originalRequest.url?.includes("auth") && !originalRequest.sent) {
      try {
        // Mark the request to prevent retry loops
        originalRequest.sent = true;

        // Attempt to refresh the token
        const response = await axiosInstance.post("/auth/refresh", {}, {
          headers: {
            Authorization: `Bearer ${getTokensFromLocalStorage().refreshToken ?? ""}`, // will override the default Authorization header
          }
        });

          setTokensToLocalStorage(
            response.data.accessToken,
            response.data.refreshToken
          );

        // If refresh is successful, retry the original request
        if (response.status === axios.HttpStatusCode.Ok) {
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        const logout = useAuthStore.getState().logout;
        localStorage.clear();
        logout();
        window.location.href = '/auth';
      }
    }

    // Reject the original error if refresh was not possible
    return Promise.reject(error);
  }
);

export default axiosInstance;

import { authStore } from "@/stores/auth-store";
import axios, { AxiosError } from "axios";

export type CommonApiErrorResponse = AxiosError<{
  error: string;
  message: string;
  details: {
    issues: string[];
    method: string;
    stack?: string;
    url: string;
  };
}>;

const baseConf = {
  baseURL: "/api/v1",
  timeout: 5_000,
};

const axiosInstance = axios.create({
  ...baseConf,
  headers: {
  "Content-Type": "application/json",
  Accept: "application/json",
}
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Check if the error is 403 Forbidden and it's not the auth request itself, and also prevent retry loops
    if (
      error.response?.status === axios.HttpStatusCode.Forbidden &&
      !originalRequest.url?.includes("auth") &&
      !originalRequest.sent
    ) {
      try {
        // Mark the request to prevent retry loops
        originalRequest.sent = true;

        // Attempt to refresh the token
        const response = await axiosInstance.post(
          "/auth/refresh",
          {},
          {
            headers: {
              Authorization: `Bearer ${authStore.getState().refreshToken}`, // will override the default Authorization header
            },
          }
        );

        const setAccessTokens = authStore.getState().setAccessTokens
        setAccessTokens(response.data.accessToken, response.data.refreshToken)

        // If refresh is successful, retry the original request with the new token
        if (response.status === axios.HttpStatusCode.Ok) {
          axiosInstance.defaults.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        const logout = authStore.getState().clear;
        // localStorage.clear()
        logout();
        window.location.href = "/signin";
      }
    }

    // Reject the original error if refresh was not possible
    return Promise.reject(error);
  }
);

export default axiosInstance;
import { useAuthStore } from "@/stores/auth-store";
import axios, { AxiosError } from "axios";

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

const axiosInstance = axios.create({
  baseURL: "/api/v1",
  timeout: 5_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
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
        const response = await axiosInstance.post("/auth/refresh");

        // If refresh is successful, retry the original request
        if (response.status === axios.HttpStatusCode.Ok) {
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        const logout = useAuthStore.getState().logout;
        logout();
        window.location.href = '/login';
      }
    }

    // Reject the original error if refresh was not possible
    return Promise.reject(error);
  }
);

export default axiosInstance;

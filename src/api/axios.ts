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

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api/${import.meta.env.VITE_API_VERSION}`;

const baseConf = {
  baseURL: API_BASE_URL,
  timeout: 5_000,
};

const axiosInstance = axios.create({
  ...baseConf,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// intercept 401 responses and call the refresh token endpoint
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      const response = await axiosInstance.post("/api/v1/auth/refresh");
      if (response.status === 200) {
        return axiosInstance(error.config);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

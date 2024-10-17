import axios from "axios";
import axiosInstance from "../axios";

const AUTH_URLS = {
  login: "/login",
  logout: "/logout",
  userDetails: "/user",
  refreshToken: "/refresh"
}

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(AUTH_URLS.login, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw error;
  }
};

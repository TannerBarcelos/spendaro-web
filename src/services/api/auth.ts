import axios from "axios";
import axiosInstance from "../axios";

const AUTH_URLS = {
  login: "/login",
  signup: "/signup",
  logout: "/logout",
  userDetails: "/user",
  refreshToken: "/refresh"
}

export const signin = async (email: string, password: string) => {
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

export const signup = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(AUTH_URLS.signup, {
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
}
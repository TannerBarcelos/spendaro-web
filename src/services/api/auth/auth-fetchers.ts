import axios, { AxiosResponse } from "axios";
import axiosInstance from "@/services/axios";
import type { User } from "@/features/auth/_components/signin-tab";
import type { NewUser } from "@/features/auth/_components/signup-tab";

const AUTH_BASE_URL = "/api/v1/auth"

const AUTH_URLS = {
  login: `${AUTH_BASE_URL}/signin`,
  signup: `${AUTH_BASE_URL}/signup`,
  logout: `${AUTH_BASE_URL}/logout`,
  userDetails: `${AUTH_BASE_URL}/user`,
}

type AuthResponse = AxiosResponse<{message: string}> // AxiosResponst<D> where D is the type of the data returned by the API

export const signin = async (user: User): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post(AUTH_URLS.login, {
      email: user.email,
      password: user.password,
    });
    return response
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw error;
  }
};

export const signup = async (newUser: NewUser): Promise<AuthResponse> => {
  try {
    const response = await axiosInstance.post(AUTH_URLS.signup, {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    });
    return response
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }
    throw error;
  }
}
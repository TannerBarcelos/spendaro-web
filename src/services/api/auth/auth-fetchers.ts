import axios, { AxiosResponse } from "axios";
import axiosInstance, { CommonApiErrorResponse } from "@/services/axios";
import type { User } from "@/features/auth/_components/signin-tab";
import type { NewUser } from "@/features/auth/_components/signup-tab";

const AUTH_BASE_URL = "/api/v1/auth"

const AUTH_URLS = {
  login: `${AUTH_BASE_URL}/signin`,
  signup: `${AUTH_BASE_URL}/signup`,
  logout: `${AUTH_BASE_URL}/logout`,
  userDetails: `${AUTH_BASE_URL}/user`,
}

type ApiResponsePayload = {
  message: string;
}

export type AuthResponse = AxiosResponse<ApiResponsePayload> // AxiosResponst<D> where D is the type of the data returned by the API

export const signin = async (user: User) => {
  const response = await axiosInstance.post<ApiResponsePayload>(AUTH_URLS.login, {
    email: user.email,
    password: user.password,
  });
  return response;
};

export const signup = async (newUser: NewUser) => {
  const response = await axiosInstance.post<ApiResponsePayload>(AUTH_URLS.signup, {
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    email: newUser.email,
    password: newUser.password,
  });
  return response;
};
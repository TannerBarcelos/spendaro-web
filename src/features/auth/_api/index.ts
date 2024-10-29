import axiosInstance from "@/lib/axios";
import type { User } from "@/features/auth/_components/signin-tab";
import type { NewUser } from "@/features/auth/_components/signup-tab";

const AUTH_BASE_URL = "/auth";

const AUTH_URLS = {
  login: `${AUTH_BASE_URL}/signin`,
  signup: `${AUTH_BASE_URL}/signup`,
  logout: `${AUTH_BASE_URL}/logout`,
};

type ApiResponsePayload = {
  message: string;
};

export const signin = async (user: User) => {
  const response = await axiosInstance.post<ApiResponsePayload>(
    AUTH_URLS.login,
    {
      email: user.email,
      password: user.password,
    }
  );
  return response;
};

export const signup = async (newUser: NewUser) => {
  const response = await axiosInstance.post<ApiResponsePayload>(
    AUTH_URLS.signup,
    {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      password: newUser.password,
    }
  );
  return response;
};


export const logoutUser = async () => {
  const response = await axiosInstance.get<ApiResponsePayload>(
    AUTH_URLS.logout
  );
  return response;
}
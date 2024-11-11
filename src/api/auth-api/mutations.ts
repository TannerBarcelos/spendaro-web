import { useMutation } from "@tanstack/react-query";
import { AuthApiResponse, AUTH_URLS } from "./types";
import { User } from "@/features/auth/signin-page";
import { NewUser } from "@/features/auth/signup-page";
import axiosInstance from "../axios";

export const useSigninUser = () => {
  return useMutation({
    mutationFn: async (user: User) => {
      const response = await axiosInstance.post<AuthApiResponse>(
        AUTH_URLS.login,
        user
      );
      return response;
    },
    retry: 0,
  });
};

export const useSignupUser = () => {
  return useMutation({
    mutationFn: async (newUser: NewUser) => {
      const response = await axiosInstance.post<AuthApiResponse>(
        AUTH_URLS.signup,
        newUser
      );
      return response;
    },
    retry: 0,
  });
};

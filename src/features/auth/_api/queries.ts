import { useMutation } from "@tanstack/react-query";
import { signin, signup } from ".";
import { User } from "@/features/auth/signin-page";
import { NewUser } from "@/features/auth/signup-page";

export const useSigninUser = () => {
  return useMutation({
    mutationFn: (user: User) => signin(user),
    retry: 0,
  });
};

export const useSignupUser = () => {
  return useMutation({
    mutationFn: (newUser: NewUser) => signup(newUser),
    retry: 0,
  });
};

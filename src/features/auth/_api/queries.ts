import { useMutation } from "@tanstack/react-query";
import { signin, signup } from ".";
import { User } from "@/features/auth/_components/signin-tab";
import { NewUser } from "@/features/auth/_components/signup-tab";

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

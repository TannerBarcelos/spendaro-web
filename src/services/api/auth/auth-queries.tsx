// hooks/useSigninUser.ts
import { useMutation } from "@tanstack/react-query";
import { signin, signup } from "@/services/api/auth/auth-fetchers";

// TODO: Move to schema in Zod
type CandidateUser = { email: string; password: string };

export const useSigninUser = () => {
  return useMutation({
    mutationFn: ({ email, password }: CandidateUser) => signin(email, password),
  });
};

export const useSignupUser = () => {
  return useMutation({
    mutationFn: ({ email, password }: CandidateUser) => signup(email, password),
  });
};

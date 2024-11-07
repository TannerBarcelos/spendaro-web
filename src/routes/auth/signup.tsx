import { createFileRoute, redirect } from "@tanstack/react-router";
import SignupPage from "@/features/auth/signup-page";
import { isAuthenticated } from "@/stores/auth-store";

export const Route = createFileRoute("/auth/signup")({
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: SignupPage,
});

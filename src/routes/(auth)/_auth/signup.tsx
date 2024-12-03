import { createFileRoute, redirect } from "@tanstack/react-router";
import SignupPage from "@/features/auth/signup-page";
import { useAuth } from "@clerk/clerk-react";

export const Route = createFileRoute("/(auth)/_auth/signup")({
  beforeLoad: async () => {
    const { isSignedIn } = useAuth();
    if (isSignedIn) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: SignupPage,
});

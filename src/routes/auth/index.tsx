import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthPage } from "@/features/auth";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute("/auth/")({
  beforeLoad: async () => {
    const access_token = useAuthStore.getState().accessToken;
    if (access_token) {
      throw redirect({
        to: "/dashboard",
      });
    }
  },
  component: () => <AuthPage />,
});

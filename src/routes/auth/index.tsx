import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthPage } from "@/features/auth";
import { useAuthStore } from "@/stores/auth-store";

export const Route = createFileRoute("/auth/")({
  // This is a lifecycle hook that runs before the component is loaded - it's a good place to check if the user is already authenticated and prevent them from accessing the auth page
  beforeLoad: async () => {
    const access_token = useAuthStore.getState().accessToken;
    if (access_token) {
      throw redirect({ to: "/dashboard" });
    }
  },
  validateSearch: (search) => {
    const redirect_url = search.redirect_url as string;
    if (redirect_url) {
      return { redirect_url };
    }
    return {};
  },
  component: AuthPage,
});

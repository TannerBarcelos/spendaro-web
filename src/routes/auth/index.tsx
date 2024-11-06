import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthPage } from "@/features/auth";
import { z } from "zod";
import { isAuthenticated } from "@/stores/auth-store";

// Define the search params schema - can access the search params using the useSearch hook attached to the Route component i.e. AuthRoute.useSearch()
const searchParamsSchema = z.object({
  redirect_url: z.string().optional(), // Optional because it's not always present - e.g. when user directly visits /auth/signin or they logout and are redirected to /auth/signin which doesn't have a redirect_url as a full logout means signing in again takes us to the dashboard
});

export const Route = createFileRoute("/auth/")({
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  // Validate the search params
  validateSearch: (search: z.infer<typeof searchParamsSchema>) => {
    return searchParamsSchema.parse(search);
  },
  component: AuthPage,
});

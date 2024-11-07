import { createFileRoute } from "@tanstack/react-router";
import SigninPage from "@/features/auth/signin-page";
import { z } from "zod";

// Define the search params schema - can access the search params using the useSearch hook attached to the Route component i.e. AuthRoute.useSearch()
const searchParamsSchema = z.object({
  redirect_url: z.string().optional(), // Optional because it's not always present - e.g. when user directly visits /auth/signin or they logout and are redirected to /auth/signin which doesn't have a redirect_url as a full logout means signing in again takes us to the dashboard
});

export const Route = createFileRoute("/(auth)/_auth/signin")({
  validateSearch: (search: z.infer<typeof searchParamsSchema>) => {
    return searchParamsSchema.parse(search);
  },
  component: SigninPage,
});

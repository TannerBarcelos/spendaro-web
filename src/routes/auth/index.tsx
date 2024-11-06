import { createFileRoute, redirect } from "@tanstack/react-router";
import { AuthPage } from "@/features/auth";
import { z } from "zod";
import { isAuthenticated } from "@/stores/auth-store";

const searchParamsSchema = z.object({
  redirect_url: z.string().optional(),
});

export const Route = createFileRoute("/auth/")({
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  validateSearch: (search) => {
    return searchParamsSchema.parse(search);
  },
  component: AuthPage,
});

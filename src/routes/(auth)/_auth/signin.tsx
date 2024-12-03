import { createFileRoute } from "@tanstack/react-router";
import SigninPage from "@/features/auth/signin-page";
import { z } from "zod";

const searchParamsSchema = z.object({
  redirect_url: z.string().optional(),
});

type SearchParams = z.infer<typeof searchParamsSchema>;

export const Route = createFileRoute("/(auth)/_auth/signin")({
  validateSearch: (searchValues: SearchParams) => {
    return searchParamsSchema.parse(searchValues);
  },
  component: SigninPage,
});

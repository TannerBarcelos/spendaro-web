import SetInitialCategories from "@/features/onboarding/set-initial-categories";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const searchParamsSchema = z.object({
  budget_name: z.string(),
  budget_amount: z.number(),
  budget_description: z.string(),
});

type SearchParams = z.infer<typeof searchParamsSchema>;

export const Route = createFileRoute(
  "/(app)/_app/onboarding/create-initial-categories"
)({
  component: SetInitialCategories,
  validateSearch: (searchValues: SearchParams) => {
    return searchParamsSchema.parse(searchValues);
  },
});

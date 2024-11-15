import { Page as BudgetPage } from "@/features/budgets";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const searchParamsSchema = z.object({
  create: z.boolean().optional(), // Optional boolean - if set and set to true, navigatio to the budget list page will auto-open the create budget modal
});

export const Route = createFileRoute("/(app)/_app/budgeting/")({
  component: BudgetPage,
  validateSearch: (searchValues: z.infer<typeof searchParamsSchema>) => {
    return searchParamsSchema.parse(searchValues);
  },
});

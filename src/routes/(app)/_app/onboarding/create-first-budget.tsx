import CreateInitialBudget from "@/features/onboarding/create-initial-budget";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(app)/_app/onboarding/create-first-budget"
)({
  component: CreateInitialBudget,
});

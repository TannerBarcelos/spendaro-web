import SetInitialCategories from "@/features/onboarding/set-initial-categories";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/(app)/_app/onboarding/create-initial-categories"
)({
  component: SetInitialCategories,
});

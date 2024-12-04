import OnboardingPage from "@/features/onboarding";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_app/onboarding/")({
  component: OnboardingPage,
});

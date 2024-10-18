import { ReportingPage } from "@/features/reporting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/reporting/")({
  component: ReportingPage,
});

import { ReportingWidget } from "@/features/dashboard/widgets/reporting";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/reporting/")({
  component: ReportingWidget,
});

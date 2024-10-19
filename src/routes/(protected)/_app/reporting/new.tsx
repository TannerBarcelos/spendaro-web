import { createFileRoute } from "@tanstack/react-router";
import { CreateReport } from "@/features/reporting/create-report";

export const Route = createFileRoute("/(protected)/_app/reporting/new")({
  component: () => CreateReport,
});

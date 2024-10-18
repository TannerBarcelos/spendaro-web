import { TransactPage } from "@/features/transact";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app/transact/")({
  component: TransactPage,
});

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: () => <Dashboard />,
});

function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl">Dashboard</h1>
      <p>This is the dashboard page.</p>
    </div>
  );
}

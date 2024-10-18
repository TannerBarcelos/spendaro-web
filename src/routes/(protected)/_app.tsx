import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app")({
  component: () => <Layout />,
});

function Layout() {
  return (
    <div className="container mx-auto min-h-full">
      <Outlet />
    </div>
  );
}

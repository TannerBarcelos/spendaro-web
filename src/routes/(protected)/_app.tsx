import { Navigation } from "@/components/Navigation";
import { useAuthStore } from "@/stores/auth-store";
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/(protected)/_app")({
  component: () => <Layout />,
});

function Layout() {
  const navigate = useNavigate();
  const isSignedIn = useAuthStore((state) => state.isSignedIn);

  if (!isSignedIn) {
    navigate({
      to: "/auth",
    });
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Navigation />
      <Outlet />
    </div>
  );
}

import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/sonner";
import { useAuthStore } from "@/stores/auth-store";
import { useNavigate } from "@tanstack/react-router";

// The root route is the entry point for TanStack Router. It is the parent of all other routes. It will always be rendered, so it is a good place to put layout components like a Navigation or sidebar.
export const Route = createRootRoute({
  component: RootRoute,
});

function RootRoute() {
  const navigate = useNavigate();
  const isSignedIn = useAuthStore((state) => state.isSignedIn);
  const logout = useAuthStore((state) => state.logout);

  if (!isSignedIn) {
    logout();
    navigate({
      to: "/auth",
    });
  }

  return (
    <>
      <div className="min-h-screen flex flex-col m-4 lg:mx-0 bg-gradient-to-br from-slate-50 to-indigo-50 ">
        <Outlet />
        <Toaster />
        <TanStackRouterDevtools />
      </div>
    </>
  );
}

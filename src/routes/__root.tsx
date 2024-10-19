import { Navigation } from "@/components/Navigation";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// The root route is the entry point for TanStack Router. It is the parent of all other routes. It will always be rendered, so it is a good place to put layout components like a Navigation or sidebar.
export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 ">
        <Navigation />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});

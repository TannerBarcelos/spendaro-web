import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/sonner";

// The root route is the entry point for TanStack Router. It is the parent of all other routes. It will always be rendered, so it is a good place to put layout components like a Navigation or sidebar.
export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <div className="min-h-screen mx-auto lg:mx-0 bg-gradient-to-br from-slate-50 to-indigo-50 ">
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </div>
  );
}

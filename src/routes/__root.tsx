import {
  createRootRouteWithContext,
  Outlet,
  ScrollRestoration,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type RouterContext = {
  queryClient: QueryClient;
};

// The root route is the entry point for TanStack Router. It is the parent of all other routes. It will always be rendered, so it is a good place to put layout components like a Navigation or sidebar.
export const Route = createRootRouteWithContext<RouterContext>()({
  component: Root,
});

function Root() {
  return (
    <div className="min-h-screen px-4 md:px-0 mx-auto lg:mx-0">
      <Outlet />
      <Toaster />
      <ScrollRestoration />
      <TanStackRouterDevtools />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </div>
  );
}

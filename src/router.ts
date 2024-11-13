import { createRouter } from "@tanstack/react-router";
import { queryClient } from "@/api/query-client.ts";
import { routeTree } from "./routeTree.gen.ts";
import NotFound from "./components/fallbacks/page-not-found.tsx";

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFound,
  context: {
    queryClient,
  },
  defaultPreload: "intent",
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
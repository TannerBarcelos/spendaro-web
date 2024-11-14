import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

import { isAuthenticated } from "@/stores/auth-store";
import { queryClient } from "@/api/query-client";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar";

export const Route = createFileRoute("/(app)/_app")({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      queryClient.clear();
      throw redirect({
        to: "/signin",
        search: {
          redirect_url: location.href,
        },
      });
    }
  },
  component: App,
});

function App() {
  // const { isLoading, isError, data } = useUserDetails();

  // if (isError) {
  //   return toast.error("An error occurred while fetching user details");
  // }

  return (
    <SidebarProvider>
      <Sidebar />
      <SidebarInset>
        <main className="flex flex-1 flex-col px-4 container mx-auto my-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

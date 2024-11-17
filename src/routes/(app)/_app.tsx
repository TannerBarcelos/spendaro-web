import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar";
import { SignedIn, useUser } from "@clerk/clerk-react";

export const Route = createFileRoute("/(app)/_app")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  const { user, isSignedIn, isLoaded } = useUser();
  console.log(isSignedIn);
  console.log(user);

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    navigate({
      to: "/signin",
      search: {
        redirect_url: window.location.href,
      },
    });
  }

  return (
    <SidebarProvider>
      <SignedIn>
        <Sidebar />
        <SidebarInset>
          <main className="flex flex-1 flex-col px-4 container mx-auto my-6">
            <Outlet />
          </main>
        </SidebarInset>
      </SignedIn>
    </SidebarProvider>
  );
}

import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "@/components/sidebar";
import { SignedIn, useUser } from "@clerk/clerk-react";

export const Route = createFileRoute("/(app)/_app")({
  component: App,
});

function App() {
  const navigate = useNavigate();
  const { user, isLoaded, isSignedIn } = useUser();

  const isOnboarded = user?.publicMetadata?.isOnboarded || false;

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    navigate({
      to: "/signin",
      search: {
        redirect_url: window.location.href, // include the current url as a query param so that Clerk can redirect back to it after sign in
      },
    });
  }

  if (isSignedIn && !isOnboarded) {
    navigate({
      to: "/onboarding",
    });
  }

  return (
    <SignedIn>
      <SidebarProvider>
        {/* {isOnboarded && <Sidebar />} */}
        <Sidebar />
        <main className="flex flex-1 flex-col px-4 container mx-auto my-6">
          <Outlet />
        </main>
      </SidebarProvider>
    </SignedIn>
  );
}

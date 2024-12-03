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
  console.log(isSignedIn);
  const isOnboarded = user?.publicMetadata?.isOnboarded || false;

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    console.log(window.location.href);
    navigate({
      to: "/signin",
      search: {
        redirect_url: window.location.href,
      },
    });
  }

  if (isSignedIn && !isOnboarded) {
    navigate({
      to: "/onboarding",
    });
  }

  return (
    <SidebarProvider>
      <SignedIn>
        {isOnboarded && <Sidebar />}
        <main className="flex flex-1 flex-col px-4 container mx-auto my-6">
          <Outlet />
        </main>
      </SignedIn>
    </SidebarProvider>
  );
}

import {
  createFileRoute,
  Link,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { isAuthenticated } from "@/stores/auth-store";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/(auth)/_auth")({
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    }
  },
  component: AuthPageLayout,
});

export function AuthPageLayout() {
  return (
    <div className="container m-auto h-screen ">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-row py-3">
          <Zap size={24} strokeWidth={2.5} className="mr-2 text-logo" />
          <Link
            to="/dashboard"
            className="text-xl font-semibold dark:text-primary"
          >
            Spendaro
          </Link>
        </div>
      </div>
      <div className="p-8 m-auto w-full h-[80%] rounded-2xl bg-white dark:bg-card shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}

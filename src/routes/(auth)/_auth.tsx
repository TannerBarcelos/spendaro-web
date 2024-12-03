import { useAuth } from "@clerk/clerk-react";
import {
  createFileRoute,
  Link,
  Outlet,
  useNavigate,
} from "@tanstack/react-router";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/(auth)/_auth")({
  component: AuthPageLayout,
});

export function AuthPageLayout() {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  if (isSignedIn) {
    navigate({ to: "/dashboard" });
  }
  return (
    <div className="container m-auto h-screen ">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-row py-3">
          <Zap size={24} strokeWidth={2.5} className="mr-2 text-logo" />
          <Link to="/dashboard" className="text-xl font-semibold">
            Spendaro
          </Link>
        </div>
      </div>
      <div className="p-8 m-auto w-full h-[80%] rounded-2xl bg-white dark:bg-card shadow-sm">
        <div className="flex items-center justify-between h-full">
          <div className="w-1/2 h-full bg-primary/[0.009] rounded-2xl relative">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-start lg:w-[500px]">
                  <Zap size={70} strokeWidth={1.5} className="text-logo" />
                  <h1 className="lg:text-4xl font-bold text-primary my-4">
                    Track, Save, Thrive.
                  </h1>
                  <p className="text-md  mt-2 text-foreground">
                    Spendaro aims to help all users track their expenses, save
                    money and thrive financially.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

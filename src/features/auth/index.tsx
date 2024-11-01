import { useState } from "react";
import AuthHeader from "./_components/auth-header";
import TabsSelection from "./_components/tabs";
import { Link, useNavigate } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";

const UnAuthNav = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row p-3">
          <Zap size={24} color="#006EFF" strokeWidth={2.5} className="mr-2" />
          <Link to="/dashboard" className="text-xl font-semibold">
            Spendaro
          </Link>
        </div>
      </div>
    </nav>
  );
};

export function AuthPage() {
  const navigate = useNavigate();
  const access_token = useAuthStore((state) => state.accessToken);
  const [selectedTab, setSelectedTab] = useState("signin");
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  // access token can exist,but be expired. When a request is sent from the dashboard, the server will return a 401 error if the token is expired.
  // and the user will be redirected to the login page and have the token removed from the local storage.
  if (access_token) {
    navigate({
      to: "/dashboard",
    });
  }

  return (
    <>
      <UnAuthNav />
      <div className="flex flex-col items-center justify-center p-4 mt-20">
        <div className="w-full max-w-lg">
          <div className="bg-white rounded-xl shadow-2xl p-8 space-y-8">
            <AuthHeader selectedTab={selectedTab} />
            <TabsSelection handleTabChange={handleTabChange} />
          </div>
        </div>
      </div>
    </>
  );
}

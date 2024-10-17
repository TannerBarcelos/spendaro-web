import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SigninTab from "./_components/signin-tab";
import SignupTab from "./_components/signup-tab";
import { useState } from "react";

export function AuthPage() {
  const [selectedTab, setSelectedTab] = useState("signin");
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-2xl p-8 space-y-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              {selectedTab === "signin"
                ? "Welcome Back!"
                : "Create Your Account"}
            </h1>
            <p className="text-gray-500 mt-2 text-sm">
              Enter to start your journey towards financial freedom.
            </p>
          </div>
          <Tabs
            defaultValue="signin"
            className="w-full"
            onValueChange={handleTabChange}
          >
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 rounded-md">
              <TabsTrigger value="signin" className="text-sm">
                Sign In
              </TabsTrigger>
              <TabsTrigger value="signup" className="text-sm">
                Sign Up
              </TabsTrigger>
            </TabsList>
            <SigninTab />
            <SignupTab />
          </Tabs>
        </div>
      </div>
    </div>
  );
}

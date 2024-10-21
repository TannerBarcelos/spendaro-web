import { useState } from "react";
import AuthHeader from "./_components/auth-header";
import TabsSelection from "./_components/tabs";

export function AuthPage() {
  const [selectedTab, setSelectedTab] = useState("signin");
  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-20">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-xl shadow-2xl p-8 space-y-8">
          <AuthHeader selectedTab={selectedTab} />
          <TabsSelection handleTabChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
}

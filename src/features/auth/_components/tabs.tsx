import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SigninTab from "./signin-tab";
import SignupTab from "./signup-tab";

type AuthTabsProps = {
  handleTabChange: (value: string) => void;
};

function AuthTabs({ handleTabChange }: AuthTabsProps) {
  return (
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
  );
}
export default AuthTabs;

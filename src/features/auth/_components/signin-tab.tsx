import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { TabsContent } from "@radix-ui/react-tabs";
import { Mail, ArrowRight, Lock } from "lucide-react";
import { useState } from "react";

function SigninTab() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };
  return (
    <TabsContent value="signin">
      <form onSubmit={handleSignin} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xs font-normal text-gray-700">
            Email
          </Label>
          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-xs font-normal text-gray-700"
          >
            Password
          </Label>
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition duration-300 flex items-center justify-center text-base"
        >
          Login <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </TabsContent>
  );
}
export default SigninTab;

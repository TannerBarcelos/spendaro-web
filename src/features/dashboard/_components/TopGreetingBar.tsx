import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { HandCoins } from "lucide-react";
import { greetTimeOfDay as greet } from "@/lib/utils";

function TopGreetingBar() {
  return (
    <div className="flex flex-row items-center justify-between mb-4">
      <h1 className="text-xl lg:text-2xl font-semibold">{greet()}</h1>
      <Link to="/budget/new" className="flex items-center gap-2">
        <Button className="rounded-lg text-sm">
          <HandCoins /> create budget
        </Button>
      </Link>
    </div>
  );
}
export default TopGreetingBar;

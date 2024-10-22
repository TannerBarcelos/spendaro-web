import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { greetTimeOfDay as greet } from "@/lib/utils";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Link } from "@tanstack/react-router";
import { ChartArea, HandCoins, Plus, WalletCards } from "lucide-react";

function TopGreetingBar() {
  return (
    <div className="flex flex-row items-center mb-4 w-max">
      <h1 className="text-xl lg:text-2xl font-semibold mr-4">{greet()}</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="text-sm w-10 h-10 rounded-full space-x-4">
            <Plus size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={5}>
          <Link to="/budgeting/new">
            <DropdownMenuItem>
              <HandCoins />
              Create a Budget
            </DropdownMenuItem>
          </Link>
          <Link to="/transactions">
            <DropdownMenuItem>
              <WalletCards />
              Add a Transaction
            </DropdownMenuItem>
          </Link>
          <Link to="/reporting/new">
            <DropdownMenuItem>
              <ChartArea />
              Create a Report
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export default TopGreetingBar;

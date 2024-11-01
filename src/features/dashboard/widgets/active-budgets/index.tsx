import Info from "@/components/Info";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { EllipsisVertical, EyeIcon, Plus } from "lucide-react";

export function ActiveBudgetsWidget() {
  return (
    <Card>
      <WidgetTitle />
      <CardContent></CardContent>
    </Card>
  );
}

const WidgetTitle = () => {
  return (
    <CardHeader>
      <CardTitle className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-base lg:text-md font-medium text-slate-950">
            Active Budgets
          </h2>
          <Info info="A list of all your active budgets" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-primary rounded-2xl">
            <EllipsisVertical className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={3}>
            <Link to={"/budgeting/new"}>
              <DropdownMenuItem>
                <Plus />
                Create a Budget
              </DropdownMenuItem>
            </Link>
            <Link to={"/budgeting"}>
              <DropdownMenuItem>
                <EyeIcon />
                View a Budget
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardTitle>
    </CardHeader>
  );
};

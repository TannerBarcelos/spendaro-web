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
import { Edit, EllipsisVertical, EyeIcon, Plus } from "lucide-react";

export function LatestTransactionsWidget() {
  return (
    <Card className="row-span-4">
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
            Latest Transactions
          </h2>
          <Info info="A list of all your latest transactions across all your accounts and budgets" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <EllipsisVertical className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={3}>
            <Link to={"/transactions/new"}>
              <DropdownMenuItem>
                <Plus />
                Add a Transaction
              </DropdownMenuItem>
            </Link>
            <Link to={"/transactions"}>
              <DropdownMenuItem>
                <EyeIcon />
                View Latest Transactions
              </DropdownMenuItem>
            </Link>
            <Link to={"/transactions"}>
              <DropdownMenuItem>
                <Edit />
                Edit a Transaction
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardTitle>
    </CardHeader>
  );
};

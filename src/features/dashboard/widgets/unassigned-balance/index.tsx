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
import { EllipsisVertical, Plus } from "lucide-react";

export function UnassignedBalanceWidget() {
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
            Unassigned Balance
          </h2>
          <Info info="This is the total un-assigned dollar amount across all your accounts that have not been assigned a job" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              <EllipsisVertical className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={3}>
            <Link to={"/budgeting"}>
              <DropdownMenuItem>
                <Plus />
                View Unassigned Balance
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardTitle>
    </CardHeader>
  );
};

import Info from "@/components/more-info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { ChartArea, EllipsisVertical, EyeIcon, Plus } from "lucide-react";

export function ReportingWidget() {
  return (
    <Card className="col-span-3 row-span-2">
      <WidgetTitle />
      <CardContent>{/* <Chart /> */}</CardContent>
    </Card>
  );
}

const WidgetTitle = () => {
  return (
    <CardHeader>
      <CardTitle className="flex flex-row items-center justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-base md:text-md font-normal text-foreground">
            Budget Performance
          </h2>
          <Info info="Detailed view over your budget performance" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="hover:text-primary  rounded-2xl">
            <EllipsisVertical className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={3}>
            <Link to={"/reporting/new"}>
              <DropdownMenuItem>
                <Plus />
                Create a Report
              </DropdownMenuItem>
            </Link>
            <Link to={"/reporting"}>
              <DropdownMenuItem>
                <EyeIcon />
                View Performance
              </DropdownMenuItem>
            </Link>
            <Link to={"/reporting/manage"}>
              <DropdownMenuItem>
                <ChartArea />
                Manage Reports
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardTitle>
    </CardHeader>
  );
};

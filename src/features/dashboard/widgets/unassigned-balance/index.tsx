import DropdownMenu from "@/components/DropdownMenu";
import Info from "@/components/Info";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Ellipsis } from "lucide-react";

export function UnassignedBalanceWidget() {
  return (
    <Card className="row-span-4">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-medium">Unassigned Balance</h2>
            <Info context="This is the total un-assigned dollar amount across all your accounts that have not been assigned a job" />
          </div>
          <DropdownMenu
            menuItems={[
              "My Account",
              "Profile",
              "Billing",
              "Team",
              "Subscription",
            ]}
            trigger={<Ellipsis className="ml-auto" size={20} />}
          />
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}

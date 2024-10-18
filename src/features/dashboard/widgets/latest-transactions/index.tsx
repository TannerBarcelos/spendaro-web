import DropdownMenu from "@/components/DropdownMenu";
import { Ellipsis } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Info from "@/components/Info";

export function LatestTransactions() {
  return (
    <Card className="row-span-4">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-medium">Latest Transactions</h2>
            <Info context="View all the latest transactions across all your budgets" />
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

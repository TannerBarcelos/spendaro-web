import DropdownMenu from "@/components/DropdownMenu";
import { Ellipsis } from "lucide-react";

export function PerformanceWidget() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="flex flex-row p-4 items-center justify-between">
        <h2 className="text-md font-medium">Budget Performance</h2>
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
      </div>
    </div>
  );
}

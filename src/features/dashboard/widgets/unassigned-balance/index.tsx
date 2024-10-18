import { SpendaroCard } from "@/components/Card";
import { Eye } from "lucide-react";

const menuItems = [
  {
    link: "/budget",
    name: "View Unassigned Balance",
    linkIcon: <Eye />,
  },
];

export function UnassignedBalanceWidget() {
  return (
    <SpendaroCard
      title="Unassigned Balance"
      info="This is the total un-assigned dollar amount across all your accounts that have not been assigned a job"
      menuItems={menuItems}
    />
  );
}

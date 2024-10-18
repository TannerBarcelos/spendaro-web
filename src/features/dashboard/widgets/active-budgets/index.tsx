import { SpendaroCard } from "@/components/SpendaroCard";
import { Eye } from "lucide-react";

const menuItems = [
  {
    link: "/budget",
    name: "View Your Budgets",
    linkIcon: <Eye />,
  },
];

export function ActiveBudgetsWidget() {
  return (
    <SpendaroCard
      title="Active Budgets"
      info="A list of all your active budgets"
      menuItems={menuItems}
    />
  );
}

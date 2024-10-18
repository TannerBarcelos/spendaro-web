import { SpendaroCard } from "@/components/SpendaroCard";
import { Eye } from "lucide-react";

const menuItems = [
  {
    link: "/budget",
    name: "View Your Budgets",
    linkIcon: <Eye />,
  },
];

export function PerformanceWidget() {
  return (
    <SpendaroCard
      title="Budget Performance"
      info="Detailed view over your budget performance."
      menuItems={menuItems}
      className="col-span-3 row-span-3"
    ></SpendaroCard>
  );
}

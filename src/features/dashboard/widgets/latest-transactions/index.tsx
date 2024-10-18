import { SpendaroCard } from "@/components/Card";
import { CirclePlus, Eye, Pencil } from "lucide-react";

const menuItems = [
  {
    link: "/transact",
    name: "View Your Transactions",
    linkIcon: <Eye />,
  },
  {
    link: "/transact/create",
    name: "Add a Transaction",
    linkIcon: <CirclePlus />,
  },
  {
    link: "/transact/edit",
    name: "Edit a Transaction",
    linkIcon: <Pencil />,
  },
];

export function LatestTransactionsWidget() {
  return (
    <SpendaroCard
      title="Latest Transactions"
      info="A list of all your latest transactions across all your accounts and budgets"
      menuItems={menuItems}
      className="row-span-4"
    />
  );
}

import { greetTimeOfDay } from "@/lib/utils";
import { Ellipsis } from "lucide-react";

export function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <h1 className="my-4 text-3xl font-semibold">{greetTimeOfDay()}</h1>
      <div className="flex-grow grid grid-cols-4 grid-rows-4 gap-6">
        <div className="bg-white rounded-2xl row-span-4">
          <div className="flex flex-row p-4 items-center">
            <h2 className="text-md font-medium">Latest Transactions</h2>
            <Ellipsis className="ml-auto" size={20} />
          </div>
        </div>
        <div className="col-span-3 row-span-1 grid grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl">
            <div className="flex flex-row p-4 items-center">
              <h2 className="text-md font-medium">Account Balance</h2>
              <Ellipsis className="ml-auto" size={20} />
            </div>
          </div>
          <div className="bg-white rounded-2xl">
            <div className="flex flex-row p-4 items-center">
              <h2 className="text-md font-medium">Active Budgets</h2>
              <Ellipsis className="ml-auto" size={20} />
            </div>
          </div>
          <div className="bg-white rounded-2xl">
            <div className="flex flex-row p-4 items-center">
              <h2 className="text-md font-medium">Favorite Categories</h2>
              <Ellipsis className="ml-auto" size={20} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl col-span-3 row-span-3">
          <div className="flex flex-row p-4 items-center">
            <h2 className="text-md font-medium">Budget Performance</h2>
            <Ellipsis className="ml-auto" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

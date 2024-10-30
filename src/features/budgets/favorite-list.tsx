import { ArrowUpRight, DollarSign } from "lucide-react";

interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  assigned: number;
  color: string;
}

const budgetCategories: BudgetCategory[] = [
  {
    id: "1",
    name: "Groceries",
    allocated: 500,
    assigned: 500,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "2",
    name: "Rent",
    allocated: 1200,
    assigned: 1200,
    color: "from-blue-400 to-blue-500",
  },
  {
    id: "3",
    name: "Transportation",
    allocated: 300,
    assigned: 250,
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "4",
    name: "Utilities",
    allocated: 200,
    assigned: 180,
    color: "from-indigo-400 to-blue-500",
  },
  {
    id: "5",
    name: "Entertainment",
    allocated: 150,
    assigned: 100,
    color: "from-blue-400 to-indigo-400",
  },
  {
    id: "6",
    name: "Savings",
    allocated: 400,
    assigned: 400,
    color: "from-indigo-500 to-blue-600",
  },
];

const totalBudget = budgetCategories.reduce(
  (sum, category) => sum + category.allocated,
  0
);
const totalAssigned = budgetCategories.reduce(
  (sum, category) => sum + category.assigned,
  0
);

export default function FavoriteList() {
  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Favorited Budgets</h2>
        <p className="text-sm text-gray-600">
          Assigned: ${totalAssigned.toLocaleString()} / $
          {totalBudget.toLocaleString()}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {budgetCategories.map((category) => (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-lg p-4 bg-gradient-to-br ${category.color} text-white shadow-sm transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-md`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-sm">{category.name}</h3>
              <DollarSign className="h-4 w-4 opacity-75" />
            </div>
            <p className="text-xs opacity-90 mb-2">
              ${category.allocated.toLocaleString()}
            </p>
            <div className="mb-3">
              <div className="flex justify-between text-[11px] mb-1">
                <span>Assigned</span>
                <span>${category.assigned.toLocaleString()}</span>
              </div>
              <div className="h-1 bg-white bg-opacity-20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-500"
                  style={{
                    width: `${(category.assigned / category.allocated) * 100}%`,
                  }}
                />
              </div>
            </div>
            <button
              className="absolute bottom-2 right-2 p-1.5 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
              aria-label={`View details for ${category.name} category`}
            >
              <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { ChevronsUpDown, Plus, SparklesIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Budget } from "@/api/budget-api/types";
import { useBudgetStore } from "@/stores/budget-store";

type BudgetSwitcherProps = {
  budgets: Budget[];
};

function BudgetSwitcher({ budgets }: BudgetSwitcherProps) {
  const { isMobile } = useSidebar();
  const activeBudget = useBudgetStore((state) => state.active_budget);
  const setActiveBudget = useBudgetStore((state) => state.setActiveBudget);

  const activeBudgetIndex = budgets.findIndex(
    (budget) => budget.id === Number(activeBudget)
  );

  const activeBudgetName =
    activeBudgetIndex !== -1
      ? budgets[activeBudgetIndex].budget_name
      : "Select budget";
  const activeBudgetIcon =
    activeBudgetIndex !== -1 ? budgets[activeBudgetIndex].budget_icon : "";
  const activeBudgetAmount =
    activeBudgetIndex !== -1 ? budgets[activeBudgetIndex].amount : 0;

  return (
    <>
      {activeBudgetIndex != -1 && (
        <SidebarGroupLabel className="font-normal text-xs">
          Active Budget
        </SidebarGroupLabel>
      )}
      <SidebarMenu className="border dark:border-2 rounded-xl bg-logo/5">
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                {activeBudgetIcon !== "" && (
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary">
                    <img src={activeBudgetIcon} />
                  </div>
                )}
                <div className="grid flex-1 text-left text-xs text-foreground/90 leading-tight">
                  <span className="truncate font-normal dark:text-primary/90">
                    {activeBudgetName}
                  </span>
                  <span className="truncate text-xs text-foreground/70 pt-1">
                    {activeBudgetIndex > -1 && activeBudgetAmount === 0 ? (
                      <span className="flex items-center gap-1">
                        <SparklesIcon className="size-3 text-yellow-600/80" />{" "}
                        Budget Zero!
                      </span>
                    ) : (
                      <span>
                        {activeBudgetAmount ? `$${activeBudgetAmount}` : ""}
                      </span>
                    )}
                  </span>
                </div>
                <ChevronsUpDown className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              align="start"
              side={isMobile ? "bottom" : "right"}
              sideOffset={4}
            >
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Budgets
              </DropdownMenuLabel>
              {budgets.map((budget, index) => (
                <DropdownMenuItem
                  key={budget.budget_name}
                  onClick={() => setActiveBudget(budget.id.toString())}
                  className="gap-2 p-2"
                >
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <img src={budget.budget_icon} />
                  </div>
                  <span className="text-xs">{budget.budget_name}</span>
                  <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 p-2">
                <div className="flex size-6 items-center justify-center rounded-md border bg-background">
                  <Plus className="size-4" />
                </div>
                <div className="font-medium text-muted-foreground">
                  Add Budget
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}

export default BudgetSwitcher;

import * as React from "react";
import {
  BanknoteIcon,
  ChartAreaIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
  Zap,
} from "lucide-react";

import MainSidebarItems from "@/components/sidebar/main-sidebar-items";
import SidebarUserSelector from "@/components/sidebar/sidebar-user-selector";
import {
  Sidebar as ShadCNSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuSkeleton,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import BudgetSwitcher from "./budget-switcher";
import { useBudgetStore } from "@/stores/budget-store";
import { useGetBudgets } from "@/api/budget-api/queries";
import { Link } from "@tanstack/react-router";
import Accounts from "./nav-accounts";
import { useUser } from "@clerk/clerk-react";

const navItems = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
      isActive: false,
      isRoot: true,
    },
    {
      title: "Budgets",
      url: "/budgeting",
      icon: LandmarkIcon,
      isActive: false,
      items: [
        {
          title: "Create a budget",
          url: "/budgeting?create=true",
        },
        {
          title: "View all budgets",
          url: "/budgeting",
        },
      ],
    },
    {
      title: "Transact",
      url: "/transactions",
      icon: BanknoteIcon,
      items: [
        {
          title: "View all transactions",
          url: "/transactions",
        },
        {
          title: "Add a transaction",
          url: "/transactions/new",
        },
      ],
    },
    {
      title: "Reporting",
      url: "#",
      icon: ChartAreaIcon,
      items: [
        {
          title: "View all reports",
          url: "#",
        },
        {
          title: "Create a report",
          url: "#",
        },
      ],
    },
  ],
};

function Sidebar({ ...props }: React.ComponentProps<typeof ShadCNSidebar>) {
  const { user, isLoaded } = useUser();

  if (!isLoaded || !user) return null;

  const activeBudget = useBudgetStore((state) => state.active_budget);
  const setActiveBudget = useBudgetStore((state) => state.setActiveBudget);
  const { data: budgets, isLoading: isLoadingBudgets } = useGetBudgets();

  return (
    <ShadCNSidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton className="flex items-center py-8 leading-5 [&>svg]:size-6">
          <Zap
            size="40px"
            color="hsl(219deg, 60.9%, 64.9%)"
            strokeWidth={2.5}
          />
          <Link to="/dashboard" className="text-xl font-semibold">
            Spendaro
          </Link>
        </SidebarMenuButton>
        {isLoadingBudgets && <SidebarMenuSkeleton />}
        {budgets && <BudgetSwitcher budgets={budgets?.data} />}
      </SidebarHeader>
      <SidebarContent>
        <MainSidebarItems items={navItems.navMain} />
        {budgets && <Accounts accounts={budgets?.data} />}
        <SidebarTrigger className="my-4 ml-2" />
      </SidebarContent>
      <SidebarFooter>
        {!isLoaded && <SidebarMenuSkeleton />}
        {user && <SidebarUserSelector user={user} />}
      </SidebarFooter>
      <SidebarRail />
    </ShadCNSidebar>
  );
}

export default Sidebar;

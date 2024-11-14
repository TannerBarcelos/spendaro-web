import * as React from "react";
import {
  BanknoteIcon,
  ChartAreaIcon,
  LandmarkIcon,
  LayoutDashboardIcon,
} from "lucide-react";

import MainSidebarItems from "@/components/sidebar/main-sidebar-items";
import SidebarUserSelector from "@/components/sidebar/sidebar-user-selector";
import {
  Sidebar as ShadCNSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import BudgetSwitcher from "./budget-switcher";
import { useUserDetails } from "@/api/user-api/queries";
import { authStore } from "@/stores/auth-store";
import { useBudgetStore } from "@/stores/budget-store";
import { useNavigate } from "@tanstack/react-router";
import { useGetBudgets } from "@/api/budget-api/queries";

// This is sample data.
const navItems = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
      isActive: true,
    },
    {
      title: "Budgets",
      url: "#",
      icon: LandmarkIcon,
      isActive: true,
      items: [
        {
          title: "View budgets",
          url: "/budgeting",
        },
        {
          title: "Create a budget",
          url: "/budgeting/new",
        },
      ],
    },
    {
      title: "Transact",
      url: "#",
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
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  //   projects: [
  //     {
  //       name: "Design Engineering",
  //       url: "#",
  //       icon: Frame,
  //     },
  //     {
  //       name: "Sales & Marketing",
  //       url: "#",
  //       icon: PieChart,
  //     },
  //     {
  //       name: "Travel",
  //       url: "#",
  //       icon: Map,
  //     },
  //   ],
};

function Sidebar({ ...props }: React.ComponentProps<typeof ShadCNSidebar>) {
  const { isLoading, isError, data } = useUserDetails();
  const activeBudget = useBudgetStore((state) => state.active_budget);
  const setActiveBudget = useBudgetStore((state) => state.setActiveBudget);
  const { data: budgets, isLoading: isLoadingBudgets } = useGetBudgets();
  console.log(data?.data);
  const auth_store = authStore();
  const budget_store = useBudgetStore();
  const navigate = useNavigate();
  // If there is not a saved budget in local storage, set the first budget as the active budget from the list of budgets API
  React.useEffect(() => {
    if (budgets?.data?.[0] && !activeBudget) {
      setActiveBudget(budgets.data[0].id.toString());
    }
  }, [data]);
  return (
    <ShadCNSidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border">
        {/* <div className="flex py-4 bg-none mb-2">
          <Zap
            size={24}
            color="hsl(219deg, 60.9%, 64.9%)"
            strokeWidth={2.5}
            className="mr-2"
          />
          <Link
            to="/dashboard"
            className="text-xl font-semibold text-primary/90"
          >
            Spendaro
          </Link>
        </div> */}
        {budgets && <BudgetSwitcher budgets={budgets?.data} />}
      </SidebarHeader>
      <SidebarContent className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <MainSidebarItems items={navItems.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border">
        {/* <SidebarUserSelector user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
    </ShadCNSidebar>
  );
}

export default Sidebar;

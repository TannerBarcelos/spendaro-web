import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { LogOut, Moon, Settings, Sun, User, Zap } from "lucide-react";
import { SVGProps, useEffect } from "react";
import { JSX } from "react/jsx-runtime";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "@/contexts/theme";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authStore, isAuthenticated } from "@/stores/auth-store";
import { useQueryClient } from "@tanstack/react-query";
import { useUserDetails } from "@/api/user-api/queries";
import { UserData } from "@/api/user-api";
import { toast } from "sonner";
import React from "react";
import { cn } from "@/lib/utils";
import { queryClient } from "@/api/query-client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetBudgets } from "@/api/budget-api/queries";
import { useBudgetStore } from "@/stores/budget-store";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/(app)/_app")({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated()) {
      queryClient.clear();
      throw redirect({
        to: "/signin",
        search: {
          redirect_url: location.href,
        },
      });
    }
  },
  component: App,
});

function App() {
  const { isLoading, isError, data } = useUserDetails();
  const qc = useQueryClient();
  const auth_store = authStore();

  if (isError) {
    return toast.error("An error occurred while fetching user details");
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Navbar
        isSignedIn={true}
        isLoading={isLoading}
        cb={() => {
          auth_store.clear(); // clear the auth store (holds the access token)
          qc.clear(); // flush the cache
        }}
        userData={data?.data.data}
      />
      <Outlet />
    </div>
  );
}

export function Navbar({
  isSignedIn,
  cb,
  userData,
  isLoading,
}: {
  isSignedIn: boolean;
  cb: () => void;
  userData?: UserData;
  isLoading: boolean;
}) {
  const { theme, toggleTheme } = useTheme();

  const activeBudget = useBudgetStore((state) => state.active_budget);
  const setActiveBudget = useBudgetStore((state) => state.setActiveBudget);

  const { data, isLoading: isLoadingBudgets } = useGetBudgets();

  // If there is not a saved budget in local storage, set the first budget as the active budget from the list of budgets API
  useEffect(() => {
    if (data?.data?.[0] && !activeBudget) {
      setActiveBudget(data.data[0].id.toString());
    }
  }, [data]);

  return (
    <nav className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row">
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
        </div>
        {isSignedIn && (
          <>
            <NavMenu />
            <div className="flex items-center">
              <Label htmlFor="budget" className="text-xs font-normal">
                Active Budget
              </Label>
              <Select
                value={activeBudget}
                onValueChange={(value) => {
                  setActiveBudget(value);
                }}
                disabled={(data?.data?.length ?? 0) < 1}
              >
                <SelectTrigger
                  className="w-[180px] rounded-xl text-foreground/90 translate-x-2"
                  disabled={isLoadingBudgets}
                >
                  {isLoadingBudgets ? (
                    <Skeleton className="w-full h-[20px] rounded-full" />
                  ) : (
                    <SelectValue placeholder="Select budget" />
                  )}
                </SelectTrigger>
                <SelectContent className="text-foreground/90">
                  {data?.data?.map((budget) => (
                    <SelectItem key={budget.id} value={budget.id.toString()}>
                      {budget.budget_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center justify-end space-x-4 p-3 rounded-full min-w-fit">
                <div className="inline text-xs font-medium overflow-hidden whitespace-nowrap text-ellipsis text-right w-[100px]">
                  {isLoading ? (
                    <Skeleton className="w-full h-[30px] rounded-xl bg-gray-200/70" />
                  ) : (
                    (userData?.firstName?.charAt(0)?.toUpperCase() ?? "") +
                    userData?.firstName?.slice(1)
                  )}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      {isLoading ? (
                        <Skeleton className="w-16 h-16 rounded-full bg-border" />
                      ) : (
                        <>
                          <AvatarImage
                            src={userData?.profileImage}
                            alt="users profile image"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                          <AvatarFallback className="bg-primary/10">
                            {`${userData?.firstName ?? ""} ${userData?.lastName ?? ""}`
                              .split(" ")
                              .map((name) => name[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        </>
                      )}
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent sideOffset={10} className="">
                    <DropdownMenuItem>
                      {theme === "light" ? <Sun /> : <Moon />}
                      <button onClick={toggleTheme}>
                        Switch to {theme === "light" ? "dark" : "light"} mode
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link to="/profile">
                      <DropdownMenuItem>
                        <User />
                        Account
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/reporting/new">
                      <DropdownMenuItem>
                        <Settings />
                        Settings
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={cb}>
                      <LogOut />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

const components: { title: string; to: string; description: string }[] = [
  {
    title: "Alert Dialog",
    to: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    to: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    to: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    to: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    to: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    to: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link
            to="/dashboard"
            className={`[&.active]:text-primary [&.active]:font-medium ${navigationMenuTriggerStyle()}`}
          >
            Dashboard
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Budgets</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="md:w-[400px] lg:w-[500px] flex flex-col">
              <ListItem to="/budgeting/new" title="Create Budget">
                <p className="text-xs leading-tight">
                  Create a new budget and start tracking your expenses
                </p>
              </ListItem>
              <ListItem to="/budgeting" title="View Budgets">
                <p className="text-xs leading-tight">
                  View all your current and favorited budgets.
                </p>
              </ListItem>
              <ListItem to="/categories" title="Category Management">
                <p className="text-xs leading-tight">
                  View and manage budget categories
                </p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Transactions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="md:w-[400px] lg:w-[500px] flex flex-col">
              <ListItem to="/transactions/new" title="Add Transaction">
                <p className="text-xs leading-tight">
                  Log a new transaction in your budget
                </p>
              </ListItem>
              <ListItem to="/transactions" title="View All Transactions">
                <p className="text-xs leading-tight">
                  View all transactions in your budget
                </p>
              </ListItem>
              <ListItem to="/categories" title="Manage Transactions">
                <p className="text-xs leading-tight">
                  View all transactions across all budgets
                </p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Reports</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  to={component.to}
                  title={component.title}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  to,
  title,
  children,
}: {
  to: string;
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:rounded-xl hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <div className="text-sm font-medium leading-none flex items-center">
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  );
};

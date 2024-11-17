import {
  ChevronsUpDown,
  LogOut,
  Moon,
  SettingsIcon,
  Sun,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTheme } from "@/contexts/theme";
import { Link, useNavigate } from "@tanstack/react-router";
import { authStore } from "@/stores/auth-store";
import { useBudgetStore } from "@/stores/budget-store";
import { truncateUsername } from "@/lib/utils";
import { type UserResource } from "@clerk/types";

type SidebarUserSelectorProps = {
  user: UserResource;
};

function SidebarUserSelector({ user }: SidebarUserSelectorProps) {
  const { isMobile } = useSidebar();
  const { theme, toggleTheme } = useTheme();
  const budgetStore = useBudgetStore();
  const navigate = useNavigate();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={user.imageUrl}
                  alt={user.firstName ?? "users first name"}
                />
                <AvatarFallback className="bg-primary/10">
                  {truncateUsername(user.firstName, user.lastName)}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight text-primary/90">
                <p className="space-x-1 font-medium truncate">
                  <span>{user.firstName}</span>
                  <span>{user.lastName}</span>
                </p>
                {
                  <span className="truncate text-xs text-foreground/80">
                    {user.primaryEmailAddress?.emailAddress ?? ""}
                  </span>
                }
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={user.imageUrl}
                    alt={user.firstName ?? "Users profile image"}
                  />
                  <AvatarFallback className="bg-primary/10">
                    {truncateUsername(user.firstName, user.lastName)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user.firstName}
                  </span>
                  <span className="truncate text-xs">
                    {user.primaryEmailAddress?.emailAddress ?? ""}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                {theme === "light" ? <Sun /> : <Moon />}
                <button onClick={toggleTheme}>
                  Switch to {theme === "light" ? "dark" : "light"} mode
                </button>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link to="/profile">
                <DropdownMenuItem>
                  <User />
                  Manage Account
                </DropdownMenuItem>
              </Link>
              <Link to="/settings">
                <DropdownMenuItem>
                  <SettingsIcon />
                  Manage Account
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                budgetStore.clearActiveBudget();
                authStore.getState().clear();
                navigate({
                  to: "/signin",
                });
              }}
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export default SidebarUserSelector;

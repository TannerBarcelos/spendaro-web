import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ChartArea,
  HandCoins,
  LogOut,
  Plus,
  Settings,
  User,
  WalletCards,
  Zap,
} from "lucide-react";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/stores/auth-store";
import { useUserStore } from "@/stores/user-store";
import { logoutUser } from "@/services/api/auth/auth-fetchers";
import { toast } from "sonner";

export function Navigation() {
  const auth = useAuthStore();
  const userStore = useUserStore();
  const isSignedIn = useAuthStore((state) => state.isSignedIn);

  const handleLogout = async () => {
    try {
      await logoutUser(); // logs out the user from the server (clears cookies to invalidate the JWT token)
    } catch (error) {
      toast.error("Failed to logout");
    } finally {
      auth.logout(); // sets isSignedIn to false
      userStore.clear(); // clears all user data
    }
  };

  return (
    <nav className="py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row">
          <Zap size={24} color="#006EFF" strokeWidth={2.5} className="mr-2" />
          <Link to="/dashboard" className="text-xl font-semibold">
            Spendaro
          </Link>
        </div>
        {isSignedIn && (
          <>
            <div className="hidden md:flex space-x-6 p-2 bg-card rounded-full">
              <Link
                to="/dashboard"
                className="text-sm [&.active]:bg-nav-item-hover [&.active]:rounded-full [&.active]:text-primary [&.active]:font-medium flex items-center p-3 hover:bg-nav-item-hover hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Dashboard
              </Link>
              <Link
                to="/budgeting"
                className="text-sm [&.active]:bg-nav-item-hover [&.active]:rounded-full [&.active]:text-primary [&.active]:font-medium flex items-center p-3 hover:bg-nav-item-hover hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Budgets
              </Link>
              <Link
                to="/transactions"
                className="text-sm [&.active]:bg-nav-item-hover [&.active]:rounded-full [&.active]:text-primary [&.active]:font-medium flex items-center p-3 hover:bg-nav-item-hover hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Transactions
              </Link>
              <Link
                to="/reporting"
                className="text-sm [&.active]:bg-nav-item-hover [&.active]:rounded-full [&.active]:text-primary [&.active]:font-medium flex items-center p-3 hover:bg-nav-item-hover hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Reports
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="text-sm w-10 h-10 rounded-full space-x-4">
                    <Plus size={16} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent sideOffset={5}>
                  <Link to="/budgeting/new">
                    <DropdownMenuItem>
                      <HandCoins />
                      Create a Budget
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/transactions">
                    <DropdownMenuItem>
                      <WalletCards />
                      Add a Transaction
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/reporting/new">
                    <DropdownMenuItem>
                      <ChartArea />
                      Create a Report
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center justify-end space-x-4 p-3 bg-card rounded-full min-w-fit">
                <span className="hidden md:inline text-sm">
                  {userStore.firstName} {userStore.lastName}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={userStore.profileImage ?? ""}
                        alt="users profile image"
                      />
                      <AvatarFallback>
                        {`${userStore.firstName} ${userStore.lastName}`
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent sideOffset={10} className="w-40">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link to="/profile">
                      <DropdownMenuItem>
                        <User />
                        Profile
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/reporting/new">
                      <DropdownMenuItem>
                        <Settings />
                        Settings
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={handleLogout}>
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

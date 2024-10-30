import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { LogOut, Settings, User, Zap } from "lucide-react";
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
import { useQueryClient } from "@tanstack/react-query";
import { useFetchUserDetails } from "@/features/profile/_api/queries";
import { UserData } from "@/features/profile/_api";

export const Route = createFileRoute("/(protected)/_app")({
  component: () => <Layout />,
});

function Layout() {
  const { isLoading, isError, data } = useFetchUserDetails();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const auth_store = useAuthStore();

  if (!auth_store.accessToken || isError) {
    auth_store.clear();
    navigate({
      to: "/auth",
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <div className="container mx-auto min-h-screen flex flex-col">
        <Navbar
          isSignedIn={true}
          cb={() => {
            // qc.clear(); // flush the cache
            auth_store.clear(); // clear the auth store
          }}
          userData={data.data.data}
        />
        <Outlet />
      </div>
    );
  }
}

export function Navbar({
  isSignedIn,
  cb,
  userData,
}: {
  isSignedIn: boolean;
  cb: () => void;
  userData: UserData;
}) {
  const navItems = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/budgeting", label: "Budgets" },
    { to: "/transactions", label: "Transactions" },
    { to: "/reporting", label: "Reports" },
  ];
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
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="font-medium text-gray-700 text-sm [&.active]:bg-nav-item-hover [&.active]:rounded-full [&.active]:text-primary [&.active]:font-medium flex items-center p-3 hover:bg-nav-item-hover hover:rounded-full"
                    activeOptions={{ exact: true }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-end space-x-4 p-3 rounded-full min-w-fit">
                <span className="hidden md:inline text-sm font-medium text-gray-700">
                  Hi {userData.firstName}!
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar>
                      <AvatarImage
                        src={userData.profileImage}
                        alt="users profile image"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                      {/* If profileImage is empty (null, empty string), render the fallback */}
                      <AvatarFallback className="bg-primary/10">
                        {`${userData.firstName} ${userData.lastName}`
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

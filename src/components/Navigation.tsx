import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export function Navigation() {
  const isSignedIn = true;
  return (
    <nav className="bg-slate-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/dashboard" className="text-xl font-semibold">
          Spendaro
        </Link>
        {isSignedIn && (
          <>
            <div className="hidden md:flex space-x-6">
              <Link
                to="/dashboard"
                className="text-sm [&.active]:bg-purple-700 [&.active]:text-slate-50 [&.active]:rounded-full flex items-center p-3 hover:bg-purple-100 hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Dashboard
              </Link>
              <Link
                to="/budget"
                className="text-sm [&.active]:bg-purple-700 [&.active]:text-slate-50 [&.active]:rounded-full  flex items-center p-3 hover:bg-purple-100 hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Budget
              </Link>
              <Link
                to="/transact"
                className="text-sm [&.active]:bg-purple-700 [&.active]:text-slate-50 [&.active]:rounded-full  flex items-center p-3 hover:bg-purple-100 hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Transact
              </Link>
              <Link
                to="/analytics"
                className="text-sm [&.active]:bg-purple-700 [&.active]:text-slate-50 [&.active]:rounded-full  flex items-center p-3 hover:bg-purple-100 hover:rounded-full"
                activeOptions={{ exact: true }}
              >
                Analytics
              </Link>
            </div>
            <div className="flex items-center space-x-4 ">
              <span className="hidden md:inline text-sm">Tanner Barcelos</span>
              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/41309200?v=4"
                  alt="Tanner Barcelos"
                />
                <AvatarFallback>TB</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
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

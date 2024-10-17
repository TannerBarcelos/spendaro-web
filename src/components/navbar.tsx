import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 text-background">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/dashboard" className="text-2xl font-semibold">
          Spendaro
        </Link>
        <div className="hidden md:flex space-x-6">
          <NavLink href="/dashboard" active>
            Dashboard
          </NavLink>
          <NavLink href="/budget">Budget</NavLink>
          <NavLink href="/transactions">Transactions</NavLink>
          <NavLink href="/analytics">Analytics</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">Tanner Barcelos</span>
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
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

function NavLink({ href, children, active = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`hover:text-green-400 transition-colors ${
        active ? "text-green-400" : ""
      }`}
    >
      {children}
    </Link>
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

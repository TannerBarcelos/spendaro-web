import { Calendar, Home, Inbox, Search, Settings, Zap } from "lucide-react";

import {
  Sidebar as ShadCNSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <ShadCNSidebar>
      <SidebarContent>
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="flex">
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
          {/* {isSignedIn && <NavMenu />}
        {isSignedIn && (
          <div className="flex items-center gap-4">
            <Select
              value={activeBudget}
              onValueChange={(value) => {
                setActiveBudget(value);
              }}
              disabled={(data?.data?.length ?? 0) < 1}
            >
              <SelectTrigger
                title="Select a budget"
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
            <div className="flex items-center justify-end gap-4 p-3 rounded-full min-w-fit">
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
        )} */}
        </div>
        <BudgetSelector />
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="py-[8px]">
                  <SidebarMenuButton
                    asChild
                    className="hover:bg-background/95 hover:backdrop-blur hover:supports-[backdrop-filter]:bg-background/60"
                  >
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserSelector />
      </SidebarFooter>
    </ShadCNSidebar>
  );
}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

function BudgetSelector() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Budget"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function UserSelector() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select Budget"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0"></PopoverContent>
    </Popover>
  );
}

export default Sidebar;

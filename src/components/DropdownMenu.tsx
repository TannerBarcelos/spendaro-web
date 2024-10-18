import {
  DropdownMenu as Menu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { MoveUpRight } from "lucide-react";
import { Button } from "./ui/button";

export type MenuItem = {
  name: string;
  link?: string;
};

type DropdownMenuProps = {
  menuItems: MenuItem[];
  trigger: JSX.Element;
};

function DropdownMenu({ trigger, menuItems }: DropdownMenuProps) {
  return (
    <Menu>
      <DropdownMenuTrigger>
        <Button variant="ghost">{trigger}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map((item, idx) => {
          return (
            <>
              {item.link ? (
                <DropdownMenuItem key={idx}>
                  <Link to={item.link}>
                    <span className="flex items-center justify-evenly">
                      {item.name} <MoveUpRight color="grey" className="ml-2" />
                    </span>
                  </Link>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem key={idx}>{item.name}</DropdownMenuItem>
              )}
            </>
          );
        })}
      </DropdownMenuContent>
    </Menu>
  );
}
export default DropdownMenu;

import {
  DropdownMenu as Menu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export type MenuItem = {
  name: string;
  link?: string;
  linkIcon?: JSX.Element;
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
                <DropdownMenuItem
                  key={idx}
                  className="flex items-center justify-between"
                >
                  <Link to={item.link}>
                    <span>{item.name}</span>
                  </Link>
                  {item.linkIcon}
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

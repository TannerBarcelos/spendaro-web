import {
  DropdownMenu as Menu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type DropdownMenuProps = {
  menuItems: string[];
  trigger: JSX.Element;
};

function DropdownMenu({ trigger, menuItems }: DropdownMenuProps) {
  return (
    <Menu>
      <DropdownMenuTrigger className="hover:bg-slate-50 p-[4px] rounded-sm">
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {menuItems.map((item, idx) => {
          return <DropdownMenuItem key={idx}>{item}</DropdownMenuItem>;
        })}
      </DropdownMenuContent>
    </Menu>
  );
}
export default DropdownMenu;

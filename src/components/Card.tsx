import { Ellipsis } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Info from "./Info";

type MenuItem = {
  name: string;
  link: string;
  linkIcon?: JSX.Element;
};

type SpendaroCardProps = {
  title: string;
  info?: string;
  menuItems?: MenuItem[];
  children?: React.ReactNode;
  className?: string;
};

export function SpendaroCard({
  title,
  info,
  menuItems,
  children,
  className,
}: SpendaroCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-base lg:text-lg font-normal">{title}</h2>
            {info && <Info info={info} />}
          </div>
          {menuItems && (
            <DropdownMenu
              menuItems={menuItems}
              trigger={<Ellipsis className="ml-auto" />}
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

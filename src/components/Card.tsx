import { Ellipsis } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Info from "./Info";

type MenuItem = {
  name: string;
  link: string;
};

type SpendaroCardProps = {
  title: string;
  info?: string;
  menuItems?: MenuItem[];
  children?: React.ReactNode;
};

export function SpendaroCard({
  title,
  info,
  menuItems,
  children,
}: SpendaroCardProps) {
  return (
    <Card className="row-span-4">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-md font-medium">{title}</h2>
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

import { EllipsisVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type SpendaroCardProps = {
  title: string;
  className?: string;
  ellipsisMenuItems?: React.ReactNode;
  children?: React.ReactNode;
};

export function SpendaroCard({
  title,
  children,
  ellipsisMenuItems,
  className,
}: SpendaroCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex flex-row items-center justify-between">
          <div className="flex items-center justify-between">
            <h2 className="text-base md:text-md font-medium text-slate-950">
              {title}
            </h2>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="ghost">
                <EllipsisVertical className="ml-auto" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={3}>
              {ellipsisMenuItems}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

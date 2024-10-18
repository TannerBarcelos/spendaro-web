import { Button } from "./ui/button";
import { Info as LucideInfo } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type InfoProps = {
  context: string;
};

function Info({ context }: InfoProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" className="py-2 px-3 ml-2">
          <LucideInfo width={10} color="grey" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="right">{context}</PopoverContent>
    </Popover>
  );
}

export default Info;

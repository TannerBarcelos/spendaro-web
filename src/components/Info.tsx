import { Button } from "./ui/button";
import { Info as LucideInfo } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type InfoProps = {
  info: string;
};

function Info({ info }: InfoProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="ghost" className="py-2 px-3 ml-2">
          <LucideInfo width={10} color="grey" />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="right">{info}</PopoverContent>
    </Popover>
  );
}

export default Info;

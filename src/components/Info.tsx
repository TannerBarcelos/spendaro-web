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
        <div className="py-2 px-2" title={info}>
          <LucideInfo width={14} color="grey" />
        </div>
      </PopoverTrigger>
      <PopoverContent side="right">{info}</PopoverContent>
    </Popover>
  );
}

export default Info;

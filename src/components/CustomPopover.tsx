import { Lightbulb } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function CustomPopover({
  content,
  triggerClass = "",
}: {
  content: string;
  triggerClass?: string;
}) {
  return (
    <Popover>
      <div className={`h-[1.2rem] w-[1.2rem] animate-pulse ${triggerClass}`}>
        <PopoverTrigger>
          <Lightbulb />
        </PopoverTrigger>
      </div>

      <PopoverContent
        className="w-[350px]"
        side="top"
        updatePositionStrategy="optimized"
      >
        {content}
      </PopoverContent>
    </Popover>
  );
}

import { Lightbulb } from "lucide-react";

import Experience from "@/components/Experience";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Profile() {
  return (
    <div className="m-4 md:m-0">
      <Popover defaultOpen>
        <PopoverTrigger className="absolute right-10 h-[1.2rem] w-[1.2rem]">
          <Lightbulb />
        </PopoverTrigger>
        <PopoverContent
          className="p-2"
          side="top"
          updatePositionStrategy="optimized"
        >
          Data for this page is fetched from Sanity.io CMS
        </PopoverContent>
      </Popover>
      <div className="mx-auto max-w-xl text-3xl font-bold mt-16 mb-10">
        Experience
      </div>
      <Experience />
    </div>
  );
}

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
      <div className="mt-16 mb-10 items-center grid grid-cols-4 max-w-xl mx-auto">
        <div className="text-3xl font-bold col-span-2">Experience</div>
        <Popover>
          <div className="h-[1.2rem] w-[1.2rem] animate-pulse col-span-2 w-full text-right">
            <PopoverTrigger>
              <Lightbulb />
            </PopoverTrigger>
          </div>

          <PopoverContent
            className="w-[350px]"
            side="top"
            updatePositionStrategy="optimized"
          >
            Did you know? Data for this page is fetched from Sanity.io CMS!
          </PopoverContent>
        </Popover>
      </div>
      <Experience />
    </div>
  );
}

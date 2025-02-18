import { Lightbulb } from "lucide-react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/common/drawer";

export default function CustomDrawer({
  content,
  triggerClass = "",
}: {
  content: string;
  triggerClass?: string;
}) {
  return (
    <Drawer>
      <div className={`h-[1.2rem] w-[1.2rem] animate-pulse ${triggerClass}`}>
        <DrawerTrigger>
          <Lightbulb />
        </DrawerTrigger>
      </div>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Did you know?</DrawerTitle>
          <DrawerDescription>{content}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

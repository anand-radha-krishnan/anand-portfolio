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
} from "@/components/common/DrawerComponent";

export default function CustomDrawer({
  content,
  triggerClass = "",
  contentClass = "",
}: {
  content: string;
  triggerClass?: string;
  contentClass?: string;
}) {
  return (
    <Drawer>
      <div className={`h-[1.2rem] w-[1.2rem] animate-pulse ${triggerClass}`}>
        <DrawerTrigger>
          <Lightbulb />
        </DrawerTrigger>
      </div>
      <DrawerContent className={`${contentClass}`}>
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

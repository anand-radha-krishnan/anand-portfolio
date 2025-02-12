"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
// import { Moon, MoonIcon, Sun } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Profile", href: "/profile", current: false },
  { name: "Projects", href: "/projects", current: false },
  // { name: "Contact", href: "/contact", current: false },
];

export default function NavMenu() {
  // const { theme, setTheme } = useTheme();
  // const [theming, setThemeing] = useState(null);
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap md:justify-start md:mx-48 mx-12 justify-center">
      <Image
        alt="Anand Radha Krishnan logo"
        width={50}
        height={50}
        src="/ARK.png"
        className="h-16 w-auto rounded"
      />
      <NavigationMenu className="sm:mx-8">
        <NavigationMenuList>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={isActive}
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      {/* {theming === "dark" ? (
        <button
          onClick={() => {
            setThemeing("light");
            setTheme("light");
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      ) : (
        <button
          onClick={() => {
            setThemeing("dark");
            setTheme("dark");
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      )} */}
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, MoonIcon, Sun } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Profile", href: "/profile", current: false },
  { name: "Projects", href: "/projects", current: false },
  // { name: "Contact", href: "/contact", current: false },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex flex-wrap md:justify-start md:mx-48 mx-12 justify-center">
      <Image
        alt="Anand Radha Krishnan logo"
        width={50}
        height={50}
        src="/ARK.png"
        className="h-16 w-auto rounded"
      />
      <NavigationMenu className="sm:mx-8 mx-2">
        <NavigationMenuList>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    active={isActive}
                    className={navigationMenuTriggerStyle}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      {theme === "dark" ? (
        <button onClick={toggleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">Toggle theme</span>
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          <span className="sr-only">Toggle theme</span>
        </button>
      )}
    </div>
  );
}

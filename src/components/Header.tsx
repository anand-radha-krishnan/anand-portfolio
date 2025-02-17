"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Profile", href: "/profile", current: false },
  { name: "Projects", href: "/projects", current: false },
  // { name: "Contact", href: "/contact", current: false },
];

const components: { title: string; href: string }[] = [
  {
    title: "Pinterest",
    href: "/pinterest",
  },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const displayMore = true;

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
                <NavigationMenuLink
                  active={isActive}
                  className={navigationMenuTriggerStyle}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          {displayMore && (
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="p-4">
                  {components.map((component) => (
                    <NavigationMenuLink key={component.title} asChild>
                      <Link href={component.href} passHref>
                        {component.title}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
          <div className="w-20 justify-items-center">
            {theme === "dark" ? (
              <>
                <Sun
                  onClick={toggleTheme}
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all "
                />
                <span className="sr-only">Toggle theme</span>
              </>
            ) : (
              <>
                <Moon
                  onClick={toggleTheme}
                  className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all "
                />
                <span className="sr-only">Toggle theme</span>
              </>
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

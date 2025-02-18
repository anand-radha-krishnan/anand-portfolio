"use client";

import React from "react";
import { House, Library, FlaskConical, BookOpenText } from "lucide-react";

import FloatingDockMobile from "./FloatingDockMobile";
import FloatingDockDesktop from "./FloatingDockDesktop";

export function Dock() {
  const links = [
    {
      title: "Home",
      icon: (
        <House className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `/`,
    },
    {
      title: "Profile",
      icon: (
        <BookOpenText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/profile",
    },
    {
      title: "Projects",
      icon: (
        <FlaskConical className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Experiments",
      icon: (
        <Library className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experimentation",
    },
  ];

  return (
    <div className="flex items-center fixed justify-center top-5 h-16 w-full bg-nerutal-800">
      <>
        <FloatingDockDesktop items={links} />
        <FloatingDockMobile items={links} />
      </>
    </div>
  );
}

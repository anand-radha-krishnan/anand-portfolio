"use client";

import { useEffect, useState, useTransition } from "react";
import { motion, useScroll } from "motion/react";
import { useTheme } from "next-themes";

import ProjectCards from "@/components/ProjectCards";
import { Skeleton } from "@/components/ui/skeleton";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const [isPending, startTransition] = useTransition();
  const { theme } = useTheme();
  const [projects, setProjects] = useState({
    clientProjects: [],
    personalProjects: [],
  });

  const fetchData = async (projectType: string) => {
    const resp = await fetch(`/api/projects/${projectType}`);
    const data = await resp.json();
    return data;
  };

  useEffect(() => {
    startTransition(() => {
      const clientProjects = fetchData("client");
      const personalProjects = fetchData("personal");
      Promise.allSettled([clientProjects, personalProjects]).then((results) => {
        setProjects({
          clientProjects:
            results[0].status === "fulfilled" ? results[0].value.projects : [],
          personalProjects:
            results[1].status === "fulfilled" ? results[1].value.projects : [],
        });
      });
    });
  }, []);

  return (
    <div className="m-4 md:m-0 md:mb-12">
      {isPending ? (
        <>
          <Skeleton className="w-[200px] h-[50px] rounded-full mx-auto" />
          <div className="flex justify-center">
            <Skeleton className="w-[350px] h-[350px] rounded-full m-12" />
            <Skeleton className="w-[350px] h-[350px] rounded-full m-12 md:block hidden" />
            <Skeleton className="w-[350px] h-[350px] rounded-full m-12 md:block hidden" />
          </div>
        </>
      ) : (
        <>
          <motion.div
            id="scroll-indicator"
            style={{
              scaleX: scrollYProgress,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              zIndex: 1,
              originX: 0,
              backgroundColor: `${
                theme === "dark" ? "rgb(250, 250, 249)" : "rgb(0, 0, 0)"
              }`,
            }}
          />
          <h1 className="font-bold text-3xl text-center mt-12 mb-4">
            Client Projects
          </h1>
          <ProjectCards projects={projects.clientProjects} />
          <h1 className="font-bold text-3xl text-center mt-12 mb-4">
            Personal Projects
          </h1>
          <ProjectCards projects={projects.personalProjects} />
        </>
      )}
    </div>
  );
}

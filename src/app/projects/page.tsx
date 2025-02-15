"use client";

import { motion, useScroll } from "motion/react";
import { useTheme } from "next-themes";

import ProjectCards from "@/components/ProjectCards";
import ProjectSkeleton from "@/components/ProjectSkeleton";
import useProjects from "@/hooks/useProjects";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const {
    clientProjects,
    personalProjects,
    query: { isFetching },
  } = useProjects();

  return (
    <div className="m-4 md:m-0 md:mb-12">
      {isFetching ? (
        <ProjectSkeleton />
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
          <ProjectCards projects={clientProjects} />
          <h1 className="font-bold text-3xl text-center mt-12 mb-4">
            Personal Projects
          </h1>
          <ProjectCards projects={personalProjects} />
        </>
      )}
    </div>
  );
}

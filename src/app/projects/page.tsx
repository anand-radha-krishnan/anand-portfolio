"use client";

import { motion, useScroll } from "motion/react";
import { useTheme } from "next-themes";

import ProjectCards from "@/components/ProjectCards";
import ProjectSkeleton from "@/components/skeleton/ProjectSkeleton";
import useProjects from "@/hooks/useProjects";
import CustomDrawer from "@/components/CustomDrawer";

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  const {
    clientProjects,
    personalProjects,
    query: { isFetching },
  } = useProjects();

  return (
    <div className="mx-4 md:mb-12 mt-28">
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
          <div className="mt-12 items-baseline grid grid-cols-4 max-w-xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-4 col-span-3">
              Client Projects
            </h1>
            <CustomDrawer
              triggerClass="col-span-1 w-full text-right"
              content="Projects are fetched from MongoDB and cached with react-query!!"
            />
          </div>
          <ProjectCards projects={clientProjects} />

          <div className="mt-12 items-baseline grid grid-cols-6 max-w-xl mx-auto">
            <h1 className="font-bold text-3xl text-center mb-4 col-span-5">
              Personal Projects
            </h1>
          </div>
          <ProjectCards projects={personalProjects} />
        </>
      )}
    </div>
  );
}

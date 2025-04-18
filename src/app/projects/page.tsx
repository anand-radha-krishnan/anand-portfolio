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
    <div className="px-4 md:pb-12 pt-20">
      {isFetching ? (
        <ProjectSkeleton />
      ) : (
        <div className="dark:md:bg-[url(/project-dark.png),_url(/project-2.png)] md:bg-[url(/project-light.png),_url(/project-2.png)] md:bg-[auto_300px] md:bg-no-repeat md:bg-[position:left_-125px_top_300px,_right_bottom_50px]">
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

          <div className="flex mt-12  items-baseline max-w-6xl mx-auto">
            <div className="w-full text-3xl font-bold text-center">
              Client Projects
            </div>
            <CustomDrawer content="Projects are fetched from MongoDB and cached with react-query!!" />
          </div>

          <ProjectCards projects={clientProjects} />

          <div className="mt-12 text-center font-bold text-3xl">
            Personal Projects
          </div>

          <ProjectCards projects={personalProjects} />
        </div>
      )}
    </div>
  );
}

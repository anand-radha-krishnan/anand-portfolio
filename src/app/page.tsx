"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import ProjectCards from "@/components/ProjectCards";
import useProjects from "@/hooks/useProjects";
import ProjectSkeleton from "@/components/ProjectSkeleton";

export default function Home() {
  const {
    clientProjects,
    query: { isFetching },
  } = useProjects();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.7 }}
    >
      <Hero />

      <div className="my-12">
        <div className="flex justify-center">
          {isFetching ? (
            <ProjectSkeleton />
          ) : (
            <div>
              <h1 className="text-center font-bold text-6xl mb-4">Projects</h1>
              <ProjectCards projects={clientProjects} display={3} />
            </div>
          )}
        </div>
        <div className="text-center m-8">
          <Link href="/projects" className="ext-sm font-semibold leading-6">
            Click here to see more projects
            <span aria-hidden="true">
              <span>&nbsp;{"-->"}</span>
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

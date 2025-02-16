"use client";

import { motion } from "framer-motion";

import { Skeleton } from "@/components/ui/skeleton";
import useExperience from "@/hooks/useExperience";

export default function Experience() {
  const { data: experiences, isFetching } = useExperience();

  return (
    <>
      {isFetching ? (
        <div className="grid grid-cols-3 max-w-xl mx-auto pb-10 gap-3">
          <Skeleton className="w-[100px] h-[35px] rounded-full row-span-2" />
          <Skeleton className="w-[250px] h-[35px] rounded-full col-span-2" />
          <Skeleton className="w-[250px] h-[350px] rounded-full col-span-2" />
        </div>
      ) : (
        <>
          {experiences &&
            experiences.length > 0 &&
            experiences.map((experience, index) => {
              return (
                <div className="" key={`work-experience-${index}`}>
                  <div className="grid grid-cols-3 max-w-xl mx-auto pb-10 gap-3">
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5 }}
                      className="flex row-span-2"
                    >
                      <div className="relative right-2 w-1 h-6 animate-pulse">
                        <div className="bg-white shadow rounded h-full"></div>
                      </div>
                      {experience.timeline}
                    </motion.div>

                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.7 }}
                      className="col-span-2"
                    >
                      {experience.designation}
                    </motion.div>
                    <motion.div
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.9 }}
                      className="col-span-2 text-gray-400"
                    >
                      {experience.descriptions.length &&
                        experience.descriptions.map((desc, index) => {
                          return (
                            <ul
                              className="list-disc pl-4"
                              key={`work-experience-description-${index}`}
                            >
                              <li className="pb-2">{desc}</li>
                            </ul>
                          );
                        })}
                    </motion.div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </>
  );
}
// key={`work-experience-description-${index}`}

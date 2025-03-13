"use client";

import { motion } from "framer-motion";

import { Experience as ExperienceType } from "@/types/experience";

export default function Experience({
  experiences,
}: {
  experiences?: ExperienceType[];
}) {
  return (
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
                  transition={{ duration: 0.4 }}
                  className="flex row-span-2"
                >
                  <div className="flex row-span-2 ">
                    <div className="relative right-2 w-1 h-6 animate-pulse">
                      <div className="dark:bg-white bg-black shadow rounded h-full"></div>
                    </div>
                    <div>
                      {experience.timeline}
                      <div className="pt-2">{experience.organization}</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-2"
                >
                  <div className="col-span-2">{experience.designation}</div>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.9 }}
                  className="col-span-2"
                >
                  <div className="col-span-2">
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
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
    </>
  );
}

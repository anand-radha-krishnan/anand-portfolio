"use client";
import { motion } from "framer-motion";

import workExperiences from "@/static/work-experience.json";

export default function Experience() {
  return (
    <>
      {workExperiences.map((workExperience, index) => {
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
                {workExperience.timeline}
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.7 }}
                className="col-span-2"
              >
                {workExperience.designation}
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.9 }}
                className="col-span-2 text-gray-400"
              >
                {workExperience.description.length &&
                  workExperience.description.map((desc, index) => {
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
  );
}
// key={`work-experience-description-${index}`}

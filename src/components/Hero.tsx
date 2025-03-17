import Link from "next/link";
import { useMemo } from "react";

import { calculateExperience } from "@/lib/utils";

export default function Hero() {
  const experienceInYears = useMemo(calculateExperience, []);
  return (
    <div className="border-b-8 dark:bg-[url(/hero-image-dark.webp)] bg-[url(/hero-image-light.webp)] bg-contain bg-no-repeat md:bg-[bottom_right_-200px] bg-[center_bottom]">
      <div className="md:mx-auto max-w-2xl py-36 mx-4">
        <div className="text-center">
          <h1 className="font-bold text-6xl">Welcome to the world of Anand</h1>
          <p className="mt-6 text-lg leading-8 ">
            I am a Full Stack Engineer (Frontend-heavy) with over{" "}
            {experienceInYears}+ years of experience. I enjoy building dynamic,
            creative products and complex applications with cutting-edge
            technologies.
          </p>
          <div className="mt-10 justify-center gap-x-6">
            <Link href="/profile" className="text-sm font-semibold leading-6">
              Learn more about me{" "}
              <span aria-hidden="true">
                <span>&nbsp;{"-->"}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

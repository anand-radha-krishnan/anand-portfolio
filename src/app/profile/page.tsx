"use client";

import React from "react";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Profile() {
  const splineClassName = "w-[600px] h-[600px] mx-auto";
  return (
    <div>
      Welcome to the profile page
      <div className="flex mx-auto">
        <div className="max-w-sm h-auto rounded-3xl">
          <div>
            <Spline
              className="zoom-15 h-96"
              id="spline-1"
              scene="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="https://www.linkedin.com/in/anand-radha-krishnan/"
            prefetch={false}
            target="_blank"
            className="bg-transparent hover:bg-white-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-white rounded"
          >
            LinkedIn Profile
          </Link>
        </div>
        <div className="max-w-sm h-auto rounded-3xl">
          <div>
            <Spline
              className="zoom-15 h-96"
              id="spline-2"
              scene="https://prod.spline.design/FVZWbQH2B6ndj9UU/scene.splinecode"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Experience from "@/components/Experience";

import useExperience from "@/hooks/useExperience";
import ProfileSkeleton from "@/components/skeleton/ProfileSkeleton";
import CustomDrawer from "@/components/CustomDrawer";

export default function Profile() {
  const { data: experiences, isFetching } = useExperience();

  return (
    <div className="p-4 pt-24">
      {isFetching ? (
        <ProfileSkeleton />
      ) : (
        <div className="md:bg-[url(/profile-image-light.png)] md:bg-contain md:bg-no-repeat md:bg-[top_-200px_right_-100px]">
          <div className="mt-12 mb-10 items-center grid grid-cols-4 max-w-xl mx-auto ">
            <div className="text-3xl font-bold col-span-2">Experience</div>
            <CustomDrawer
              triggerClass="col-span-2 w-full text-right"
              content="Data for this page is fetched from Sanity.io CMS!"
            />
          </div>

          <Experience experiences={experiences} />
        </div>
      )}
    </div>
  );
}

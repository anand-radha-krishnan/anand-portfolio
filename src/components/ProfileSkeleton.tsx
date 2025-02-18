import Skeleton from "@/components/common/skeleton";

export default function ProfileSkeleton() {
  return (
    <div className="grid grid-cols-3 max-w-xl mx-auto pb-10 gap-3">
      <Skeleton className="w-[100px] h-[35px] rounded-full row-span-2" />
      <Skeleton className="w-[250px] h-[35px] rounded-full col-span-2" />
      <Skeleton className="w-[250px] h-[350px] rounded-full col-span-2" />
    </div>
  );
}

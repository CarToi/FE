import Skeleton from "@/components/Loading/Skeleton";

export default function SkeletonCard() {
  return (
    <div className="flex h-full w-full animate-pulse gap-2 sm:flex-col sm:gap-3">
      <div className="size-40 rounded-[6px] sm:h-[180px] sm:w-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton width="80%" height="1rem" />
        <Skeleton width="60%" height="0.875rem" />
        <div className="mt-2 flex gap-2">
          <Skeleton width="60px" height="1.5rem" className="rounded-[6px]" />
          <Skeleton width="40px" height="1.5rem" className="rounded-[6px]" />
        </div>
      </div>
    </div>
  );
}

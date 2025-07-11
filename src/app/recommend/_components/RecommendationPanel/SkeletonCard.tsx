export default function SkeletonCard() {
  return (
    <div className="flex h-full w-full gap-2 sm:flex-col sm:gap-3">
      <div className="size-40 shrink-0 animate-pulse rounded-md bg-slate-200 sm:h-[180px] sm:w-full" />
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-[26px] w-4/5 animate-pulse rounded-md bg-slate-200" />
        <div className="h-[20px] w-3/5 animate-pulse rounded-md bg-slate-200" />
        <div className="mt-1 flex gap-2">
          <div className="h-[28px] w-12 animate-pulse rounded-md bg-slate-200" />
          <div className="h-[28px] w-12 animate-pulse rounded-md bg-slate-200" />
        </div>
      </div>
    </div>
  );
}

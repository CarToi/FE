import { RecommendationResponse } from "@/lib/type";
import SpaceCard from "./SpaceCard";

export default function RecommendationPanel({
  spaceData,
}: {
  spaceData: RecommendationResponse[];
}) {
  return (
    <div className="scrollbar-hide relative mt-auto flex h-[50vh] max-w-[750px] flex-col gap-4 overflow-auto rounded-t-[20px] bg-white px-4 py-5 sm:mt-0 sm:h-screen sm:gap-10 sm:overflow-hidden sm:rounded-r-[20px] sm:p-10">
      <div className="flex flex-col gap-2 sm:gap-4">
        <h2 className="text-[20px] leading-normal font-semibold whitespace-pre-line text-[#1F2229] sm:text-[24px] sm:font-bold">
          {`새길이 오늘 기분에 딱 맞는\n 장소를 추천해드릴게요!`}
        </h2>
        <p className="text-[14px] leading-normal font-normal whitespace-pre-line text-[#79839A] sm:text-[16px] sm:font-medium sm:whitespace-normal">
          {`오늘은 어디로 갈지 골라볼까요?\n 도착 시간도 함께 알려드릴게요`}
        </p>
      </div>
      <div className="h-0.5 border border-[#EEEFF2]"></div>
      <div className="scrollbar-overlay flex flex-wrap gap-5 sm:w-[690px] sm:overflow-x-auto">
        {spaceData.map((space, index) => (
          <SpaceCard key={index} spaceData={space} />
        ))}
      </div>
    </div>
  );
}

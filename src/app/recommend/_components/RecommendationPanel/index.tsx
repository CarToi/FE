import { RecommendationResponse } from "@/lib/type";
import SpaceCard from "./SpaceCard";

export default function RecommendationPanel({
  spaceData,
}: {
  spaceData: RecommendationResponse[];
}) {
  return (
    <div className="relative flex h-screen w-[750px] flex-col gap-[40px] overflow-hidden rounded-tr-[20px] rounded-br-[20px] bg-[#FFFFFF] py-[40px] pr-[20px] pl-[40px]">
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[24px] leading-[150%] font-[700] text-[#1F2229]">
          새길이 오늘 기분에 딱 맞는
          <br />
          장소를 추천해드릴게요!
        </h2>
        <p className="text-[16px] leading-[150%] font-[500] text-[#79839A]">
          오늘은 어디로 갈지 골라볼까요? 도착 시간도 함께 알려드릴게요
        </p>
      </div>
      <div className="scrollbar-overlay flex w-[690px] flex-wrap gap-[20px] overflow-x-auto">
        {spaceData.map((space, index) => (
          <SpaceCard key={index} spaceData={space} />
        ))}
      </div>
    </div>
  );
}

import { RecommendationResponse } from "@/lib/type";
import SideBar from "./SideBar";
import SpaceCard from "./SpaceCard";

export default function SidePanel({
  spaceData,
}: {
  spaceData: RecommendationResponse[];
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className="relative flex flex-col gap-[40px] w-[750px] h-screen overflow-hidden  rounded-tr-[20px] rounded-br-[20px] pl-[40px] pr-[20px] py-[40px] bg-[#FFFFFF]">
        <div className="flex flex-col gap-[16px]">
          <h2 className="text-[#1F2229] text-[24px] font-[700] leading-[150%]">
            새길이 오늘 기분에 딱 맞는
            <br />
            장소를 추천해드릴게요!
          </h2>
          <p className="text-[#79839A] text-[16px] font-[500] leading-[150%]">
            오늘은 어디로 갈지 골라볼까요? 도착 시간도 함께 알려드릴게요
          </p>
        </div>
        <div className="flex flex-wrap gap-[20px] w-[690px] overflow-x-auto scrollbar-overlay">
          {spaceData.map((space, index) => (
            <SpaceCard key={index} spaceData={space} />
          ))}
        </div>
      </div>
    </div>
  );
}

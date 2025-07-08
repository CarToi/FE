import { RecommendationResponse } from "@/lib/type";
import { getCity } from "@/utils/getCity";
import { CATEGORY } from "@/constants/spaceData";
import Image from "next/image";
import LocationIcon from "@/assets/icons/location.svg";
import Temp from "@/assets/icons/temp.jpg";

export default function SpaceCard({
  spaceData,
}: {
  spaceData: RecommendationResponse;
}) {
  const city = getCity(spaceData.position);
  return (
    <div className="w-[325px]">
      <Image
        className="rounded-[6px] h-[180px]"
        src={spaceData.image || Temp}
        alt=""
        width={325}
        height={180}
        unoptimized
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center mt-[12px]">
          <h2 className="text-[#3560C0] text-[20px] font-[600] leading-[150%]">
            {spaceData.title}
          </h2>
        </div>
        <div className="flex gap-1">
          <Image src={LocationIcon} width={16} height={16} alt="" />
          <div className="text-[#616A80] text-[14px] font-[400] leading-[150%]">
            {spaceData.position}
          </div>
        </div>
      </div>
      <div className="flex gap-[8px] mt-[8px]">
        <div className="px-[12px] py-[4px] bg-[#F7F9FD] rounded-[6px] text-[#3560C0] text-[14px] font-[500] leading-[150%]">
          {CATEGORY[spaceData.category]}
        </div>
        {city && (
          <div className="px-[12px] py-[4px] bg-[#E9F5F7] rounded-[6px] text-[#3C98A4] text-[14px] font-[500] leading-[150%]">
            {city}
          </div>
        )}
      </div>
    </div>
  );
}

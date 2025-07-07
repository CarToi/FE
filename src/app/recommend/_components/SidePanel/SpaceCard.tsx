import Image from "next/image";
import Temp from "@/assets/icons/temp.jpg";
import { RecommendationResponse } from "@/lib/type";

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
      <div className="flex justify-between items-center mt-[12px]">
        <h2 className="text-[#3560C0] text-[20px] font-[600] leading-[150%]">
          {spaceData.title}
        </h2>
      </div>

      <div className="flex gap-[8px] mt-[8px]">
        <div className="px-[12px] py-[4px] bg-[#F7F9FD] rounded-[6px] text-[#3560C0] text-[14px] font-[500] leading-[150%]">
          {/* {category[spaceData.category]} */}
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

function getCity(position: string) {
  if (position.indexOf("군산") > -1) {
    return "군산";
  }
  if (position.indexOf("김제") > -1) {
    return "김제";
  }
  if (position.indexOf("부안") > -1) {
    return "부안";
  }
  return null;
}

// const category = {
//   TOUR: "여행",
//   CULTURE: "문화",
//   FESTIVAL: "축제",
// };

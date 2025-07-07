"use client";

import { useEffect } from "react";
import { transitionData } from "@/constants/transitionData";
import Image from "next/image";

interface TransitionScreenProps {
  type: "toMood" | "toRecommend";
  routing?: (page: string) => void;
}

export default function TransitionScreen({
  type,
  routing,
}: TransitionScreenProps) {
  const transitionContent = transitionData[type];

  useEffect(() => {
    if (routing) {
      setTimeout(() => {
        routing("TodayMoodSurvey");
      }, 1000);
    }
  }, [transitionContent, routing]);

  return (
    <div className="flex items-center w-full h-screen bg-[#F7F9FD]">
      <div className="flex flex-col items-center gap-[40px] w-full">
        <Image src={transitionContent.image} alt="" />
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h2 className="text-[#142448] text-center text-[36px] font-[700] leading-[120%] whitespace-pre-line">
            {transitionContent.title}
          </h2>
          <p className="text-[#7F9CDC] text-center text-[22px] font-[600] leading-[150%]">
            {transitionContent.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

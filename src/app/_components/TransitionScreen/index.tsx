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
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-[#EBF0FA] to-[#E9F5F7]">
      <div className="flex flex-col items-center gap-4 sm:gap-10">
        <Image
          src={transitionContent.image}
          className="size-40 sm:size-80"
          width={320}
          height={320}
          alt=""
        />
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
          <h2 className="text-title-large sm:text-heading-large text-center whitespace-pre-line text-[#142448]">
            {transitionContent.title}
          </h2>
          <p className="text-title-xsmall sm:text-title-medium text-center text-[#7F9CDC]">
            {transitionContent.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

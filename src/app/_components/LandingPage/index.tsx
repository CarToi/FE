"use client";

import { useEffect } from "react";
import { createNewUser } from "@/utils/createNewUser";
import Image from "next/image";

export default function LandingPage({
  routing,
}: {
  routing: (page: string) => void;
}) {
  useEffect(() => {
    createNewUser();
    setTimeout(() => {
      routing("OnboardingSurvey");
    }, 1000);
  }, [routing]);

  return (
    <div className="flex h-screen w-full items-center bg-[#F7F9FD]">
      <div className="flex w-full flex-col items-center gap-[40px]">
        <Image src="" alt="" />
        <div className="flex w-full flex-col items-center gap-[24px]">
          <h2 className="text-center text-[36px] leading-[120%] font-[700] text-[#142448]">
            새길에 오신 것을 환영해요!
          </h2>
          <p className="text-center text-[22px] leading-[150%] font-[600] text-[#7F9CDC]">
            먼저 간단한 정보부터 시작해볼까요?
          </p>
        </div>
      </div>
    </div>
  );
}

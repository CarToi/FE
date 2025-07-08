
"use client";

import { useEffect } from "react";
import { createNewUser } from "@/utils/createNewUser";
import Image from "next/image";
import { useEffect } from "react";
import Button from "@/components/Button";
import Logo from "@/assets/icons/logo.png";

export default function LandingPage({
  routing,
}: {
  routing: (page: string) => void;
}) {
  useEffect(() => {
    createNewUser();
  }, []);

  return (
    <div className="flex h-screen w-full items-center bg-[#F7F9FD]">
      <div className="flex w-full flex-col items-center gap-[40px]">
        <Image src={Logo} alt="" />
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h2 className="text-[#142448] text-center text-[36px] font-[700] leading-[120%]">
            새길에 오신 것을<br />환영해요!
          </h2>
          <p className="text-[#4b5263] text-center text-[15px] font-[600] leading-[150%]">
            귀중한 시간을 내주셔서 감사드리며,<br /> 편안하고 진솔하게 답해주시길 바랍니다.
          </p>
          <p className="text-[#3560c0] text-center text-[22px] font-[600] leading-[150%]">
        <div className="flex w-full flex-col items-center gap-[24px]">
          <h2 className="text-center text-[36px] leading-[120%] font-[700] text-[#142448]">
            새길에 오신 것을 환영해요!
          </h2>
          <p className="text-center text-[22px] leading-[150%] font-[600] text-[#7F9CDC]">
            먼저 간단한 정보부터 시작해볼까요?
          </p>
          <Button variant="primary" width={240} onClick={() => routing("OnboardingSurvey")}>
            지금 시작할게요!
          </Button>
          <p className="text-[#79839a] text-center text-[10px] font-[600] leading-[150%]">
            기타 서비스 관련 문의사항 | chickentasty0112@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

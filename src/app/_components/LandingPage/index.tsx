"use client";

import { useEffect } from "react";
import { createNewUser } from "@/utils/createNewUser";
import Image from "next/image";
import Button from "@/components/Button";
import Logo from "@/assets/icons/logo.png";
import { Info } from "lucide-react";

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
        <Image src={Logo} alt="logo" width={98} height={81}className="sm:h-[121px] sm:w-[98px] h-[81px] w-[65px]"/>
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h2 className="text-[#142448] text-center text-title-large sm:text-display">
            새길에 오신 것을<br />환영해요!
          </h2>
        <div className="w-full max-w-[720px] bg-[#e6f4f8] border border-[#b6e0ef] rounded-xl p-4 shadow-sm flex gap-2">
            <div className="text-[#1683a4] mt-1">

              <Info size={20} />
            </div>
            <div className="text-[#1683a4] text-[14px] font-[500] leading-[150%]">
              <p>
                본 서비스는 새만금사업 보조 목적의 정주의향 확인 및 인구유입 가능성을 확인하는 설문조사입니다.
              </p>
              <p className="mt-2">
                설문조사 응답은 오로지 새만금 관련 신규데이터 생산에만 쓰이며,<br />
                민감한 개인정보는 수집 대상이 아님을 밝힙니다.
              </p>
            </div>
          </div>

          <p className="text-[#4b5263] text-center text-[15px] font-[600] leading-[150%]">
            귀중한 시간을 내주셔서 감사드리며,<br /> 편안하고 진솔하게 답해주시길 바랍니다.
          </p>
          <p className="text-[#3560c0] text-center text-[22px] font-[600] leading-[150%]">
            먼저 간단한 정보부터 시작해볼까요?
          </p>
          <Button
            variant="primary"
            width={240}
            onClick={() => routing("OnboardingSurvey")}
          >
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
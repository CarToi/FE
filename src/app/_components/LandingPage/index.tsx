"use client";

import { useEffect } from "react";
import { createNewUser } from "@/utils/createNewUser";
import { Info } from "lucide-react";
import Button from "@/components/Button";
import Logo from "../../../../public/logo/logo.svg";

export default function LandingPage({
  routing,
}: {
  routing: (page: string) => void;
}) {
  useEffect(() => {
    createNewUser();
  }, []);

  return (
    <div className="m-auto flex h-screen w-full flex-col items-center justify-center gap-16 bg-gradient-to-t from-[#EBF0FA] to-white px-5 pt-10 sm:gap-20">
      <div className="flex w-full flex-col items-center gap-10">
        <Logo
          className="h-20 w-[86px] sm:h-[120px] sm:w-[112px]"
          alt="새길 로고"
        />
        <div className="flex w-full flex-col items-center gap-5 sm:gap-10">
          <h1 className="text-title-large sm:text-display text-[#142448]">
            새길에 오신 것을 환영해요!
          </h1>
          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="flex w-full max-w-[640px] gap-2 rounded-xl border border-[#C3E5E9] bg-[#E9F5F7] p-4">
              <div className="mt-1">
                <Info size={14} color="#3C98A4" />
              </div>
              <p className="text-link-small sm:text-link-large text-[#3C98A4]">
                본 서비스는 새만금사업 보조 목적의 정주의향 확인 및 인구유입
                가능성을 확인하는 설문조사입니다.
                <br />
                <br />
                설문조사 응답은 오로지 새만금 관련 신규데이터 생산에만 쓰이며,
                <br />
                민감한 개인정보는 수집 대상이 아님을 밝힙니다.
              </p>
            </div>
            <p className="text-link-small sm:text-body-medium text-center text-[#4B5263]">
              귀중한 시간을 내주셔서 감사드리며,
              <br /> 편안하고 진솔하게 답해주시길 바랍니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 sm:gap-6">
        <div className="flex w-full flex-col items-center gap-3 sm:gap-2">
          <p className="text-body-small sm:text-title-xsmall text-[#3560C0]">
            먼저 간단한 정보부터 시작해볼까요?
          </p>
          <Button
            color="blue"
            className="text-body-large h-[62px] w-full max-w-[335px] rounded-xl sm:w-[335px]"
            onClick={() => routing("OnboardingSurvey")}
          >
            지금 시작할게요!
          </Button>
        </div>
        <p className="text-link-small sm:text-body-small text-[#79839A]">
          기타 서비스 관련 문의사항 | chickentasty0112@gmail.com
        </p>
      </div>
    </div>
  );
}

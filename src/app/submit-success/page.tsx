"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Image from "next/image";
import SurveyComplete from "@/assets/images/survey-complete.png";

const GOOGLE_FORM_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5OJjg2hqPTtCszkh10CwrS39eVCf_iFfmP-21ago8KUL42w/viewform?usp=dialog";

export default function SubmitSuccessPage() {
  const router = useRouter();

  const handleRetrySurvey = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between bg-gradient-to-t from-[#EBF0FA] to-white px-5 pb-10 sm:justify-center sm:gap-10 sm:p-0">
      <div className="flex flex-1 flex-col items-center justify-center gap-6 sm:flex-none sm:gap-20">
        <Image
          src={SurveyComplete}
          className="size-[150px] sm:size-[320px]"
          alt=""
        />
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-title-large sm:text-heading-large text-center">
            설문 완료!
            <br />
            이제 커피 받으러 가볼까요?
          </h2>
          <button
            onClick={() => {
              window.open(GOOGLE_FORM_LINK, "_blank");
            }}
            className="sm:text-body-large text-body-medium flex"
          >
            👉
            <p className="cursor-pointer text-[#3560C0] underline transition-colors duration-100 hover:text-[#2A4C98] active:text-[#1F3870]">
              서비스를 평가하고 아메리카노를 받아가세요!
            </p>
          </button>
        </div>
      </div>
      <Button
        color="blue"
        className="text-body-large h-[62px] w-full max-w-[250px] rounded-xl sm:w-[250px]"
        onClick={handleRetrySurvey}
      >
        다시 추천받기
      </Button>
    </div>
  );
}

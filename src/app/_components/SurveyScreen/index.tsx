"use client";

import useSurvey from "./hooks/useSurvey";
import ProgressBar from "@/app/_components/SurveyScreen/ProgressBar";
import SurveyOption from "./SurveyOption";
import Button from "@/components/Button";

interface SurveyScreenProps {
  type: "onboarding" | "todayMood";
  routing: (page: string) => void;
}

export default function SurveyScreen({ type, routing }: SurveyScreenProps) {
  const {
    questions,
    answers,
    progress,
    currentQuestion,
    handleAnswerClick,
    handlePrevClick,
    handleNextClick,
  } = useSurvey({ type, routing });

  return (
    <div className="flex flex-col justify-between items-center w-full h-screen">
      <ProgressBar progress={progress} />
      <div className="flex flex-col justify-center gap-[64px] w-[700px]">
        <div className="flex flex-col justify-between gap-[12px]">
          <h2 className="text-[#1F2229] text-[28px] font-[600] leading-[120%]">
            {questions[currentQuestion].title}
          </h2>
          <p className="text-[#79839A] text-[20px] font-[600] leading-[150%]">
            {questions[currentQuestion].contents}
          </p>
        </div>
        <div className="flex flex-col justify-between gap-[12px] w-[700px]">
          {questions[currentQuestion].items.map((item, index) => (
            <SurveyOption
              key={index}
              text={item}
              isSelected={item === answers[currentQuestion]}
              onClick={() => handleAnswerClick(item)}
            />
          ))}
        </div>
        <div className="flex gap-[12px] items-center self-end">
          {currentQuestion > 0 && (
            <Button variant="secondary" width={120} onClick={handlePrevClick}>
              이전
            </Button>
          )}
          <Button
            variant="primary"
            width={120}
            onClick={handleNextClick}
            disabled={!answers[currentQuestion]}
          >
            다음
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

"use client";

import { useSurvey } from "./hooks/useSurvey";
import { usePostSurvey } from "./hooks/usePostSurvey";
import clsx from "clsx";
import ProgressBar from "@/app/_components/SurveyScreen/ProgressBar";
import SurveyOption from "./SurveyOption";
import Button from "@/components/Button";
import ErrorScreen from "@/components/ErrorScreen";

interface SurveyScreenProps {
  type: "onboarding" | "todayMood";
  routing?: (page: string) => void;
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

  const { handleSubmit, isLoading, isError } = usePostSurvey();

  const isLastQuestion =
    type === "todayMood" && currentQuestion === questions.length - 1;

  if (isError) return <ErrorScreen />;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-between">
      <ProgressBar progress={progress} />
      <div className="flex w-[700px] flex-col justify-center gap-[64px]">
        <div className="flex flex-col justify-between gap-[12px]">
          <h2 className="text-heading-small text-[#1F2229]">
            {questions[currentQuestion].title}
          </h2>
          <p className="text-title-small text-[#79839A]">
            {questions[currentQuestion].contents}
          </p>
        </div>
        <div className="flex w-[700px] flex-col justify-between gap-[12px]">
          {questions[currentQuestion].items.map((item, index) => (
            <SurveyOption
              key={index}
              text={item}
              isSelected={item === answers[currentQuestion]}
              onClick={() => handleAnswerClick(item)}
            />
          ))}
        </div>
        <div className="flex items-center gap-[12px] self-end">
          {currentQuestion > 0 && (
            <Button
              color="gray"
              onClick={handlePrevClick}
              className="text-body-large h-[62px] w-[120px] rounded-xl"
            >
              이전
            </Button>
          )}
          <Button
            color="blue"
            onClick={isLastQuestion ? handleSubmit : handleNextClick}
            className={clsx(
              "text-body-large h-[62px] rounded-xl",
              isLastQuestion ? "w-[166px]" : "w-[120px]"
            )}
            disabled={!answers[currentQuestion] || !isLoading}
          >
            {isLastQuestion ? "추천길 보러가기" : "다음"}
          </Button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

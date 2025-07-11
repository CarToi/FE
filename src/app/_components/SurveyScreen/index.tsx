"use client";

import { useSurvey } from "./hooks/useSurvey";
import { usePostSurvey } from "./hooks/usePostSurvey";
import clsx from "clsx";
import ProgressBar from "@/app/_components/SurveyScreen/ProgressBar";
import SurveyOption from "./SurveyOption";
import Button from "@/components/Button";
import TransitionScreen from "@/app/_components/TransitionScreen";
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

  if (isLoading && isLastQuestion) {
    return <TransitionScreen type="toRecommend" />;
  }
  if (isError) return <ErrorScreen />;

  return (
    <div className="flex h-screen w-full flex-col items-center">
      <ProgressBar progress={progress} />
      <div className="items my-[50px] flex h-full w-full max-w-[700px] flex-col justify-between gap-10 px-5 sm:justify-center sm:gap-16 sm:p-0">
        <div className="flex flex-col gap-10 sm:gap-16">
          <div className="flex flex-col gap-1 sm:gap-3">
            <h2 className="text-title-medium sm:text-heading-small text-[#1F2229]">
              {questions[currentQuestion].title}
            </h2>
            <p className="text-title-small text-[#79839A]">
              {questions[currentQuestion].contents}
            </p>
          </div>
          <div className="flex w-full max-w-[700px] flex-col gap-3">
            {questions[currentQuestion].items.map((item, index) => (
              <SurveyOption
                key={index}
                text={item}
                isSelected={item === answers[currentQuestion]}
                onClick={() => handleAnswerClick(item)}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3">
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
            disabled={!answers[currentQuestion]}
          >
            {isLastQuestion ? "추천길 보러가기" : "다음"}
          </Button>
        </div>
      </div>
    </div>
  );
}

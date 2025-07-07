import { useState } from "react";
import { surveyData } from "@/constants/surveyData";

interface UseSurveyProps {
  type: "onboarding" | "todayMood";
  routing: (page: string) => void;
}

export default function useSurvey({ type, routing }: UseSurveyProps) {
  const questions = surveyData[type];
  const storageKey = `${type}Answers`;

  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem(storageKey) ?? "[]")
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const progress =
    ((questions.length -
      answers.filter((element: string) => element === "").length) /
      questions.length) *
    100;

  const handleAnswerClick = (answer: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = answer;
    localStorage.setItem(storageKey, JSON.stringify(updatedAnswers));
    setAnswers(updatedAnswers);
  };

  const handlePrevClick = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const handleNextClick = () => {
    if (currentQuestion === questions.length - 1) {
      routing(
        type === "onboarding" ? "ToMoodTransition" : "ToRecommendTransition"
      );
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return {
    questions,
    answers,
    progress,
    currentQuestion,
    handleAnswerClick,
    handlePrevClick,
    handleNextClick,
  };
}

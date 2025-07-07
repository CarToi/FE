"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import LandingPage from "@/app/_components/LandingPage";
import SurveyScreen from "@/app/_components/SurveyScreen";
import TransitionScreen from "@/app/_components/TransitionScreen";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("LandingPage");

  const handleRouting = (page: string) => {
    setCurrentPage(page);
  };

  const pageMapping: Record<string, () => ReactNode> = {
    LandingPage: () => <LandingPage routing={handleRouting} />,
    ToMoodTransition: () => (
      <TransitionScreen type="toMood" routing={handleRouting} />
    ),
    ToRecommendTransition: () => <TransitionScreen type="toRecommend" />,
    OnboardingSurvey: () => (
      <SurveyScreen type="onboarding" routing={handleRouting} />
    ),
    TodayMoodSurvey: () => (
      <SurveyScreen type="todayMood" routing={handleRouting} />
    ),
  };

  return <div>{pageMapping[currentPage]?.()}</div>;
}

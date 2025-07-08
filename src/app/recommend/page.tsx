"use client";

import { useSurveyRecommendation } from "./_hooks/useSurveyRecommendation";
import SidePanel from "./_components/SidePanel";
import MapView from "./_components/MapView";
import BackToSurveyButton from "./_components/BackToSurveyButton";
import TransitionScreen from "@/app/_components/TransitionScreen";

export default function RecommendPage() {
  const { spaceData, isLoading, error } = useSurveyRecommendation();

  if (isLoading) return <TransitionScreen type="toRecommend" />;

  // 에러 페이지 시안 완성되면 변경
  if (error) return <div>{error}</div>;

  return (
    <div className="relative bg-[#FFFFFF] h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MapView />
      </div>
      <div className="relative z-10">
        <BackToSurveyButton />
        <SidePanel spaceData={spaceData} />
      </div>
    </div>
  );
}

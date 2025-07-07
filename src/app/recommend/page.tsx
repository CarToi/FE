"use client";

import SideBar from "./_components/SideBar";
import SidePanel from "./_components/SidePanel";
import BackToSurveyButton from "./_components/BackToSurveyButton";
import MapView from "./_components/MapView";
import TransitionScreen from "@/app/_components/TransitionScreen";
import { useSurveyRecommendation } from "./_hooks/useSurveyRecommendation";

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
      <div className="relative flex z-10">
        <BackToSurveyButton />
        <SideBar />
        <SidePanel spaceData={spaceData} />
      </div>
    </div>
  );
}

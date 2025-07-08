"use client";

import { useSurveyRecommendation } from "./_hooks/useSurveyRecommendation";
import RecommendationPanel from "./_components/RecommendationPanel";
import MapView from "./_components/MapView";
import RetrySurveyButton from "./_components/RetrySurveyButton";
import SatisfactionModalButton from "./_components/SatisfactionModalButton";
import TransitionScreen from "@/app/_components/TransitionScreen";
import NavBar from "./_components/NavBar";

export default function RecommendPage() {
  const { spaceData, isLoading, error } = useSurveyRecommendation();

  if (isLoading) return <TransitionScreen type="toRecommend" />;

  // 에러 페이지 시안 완성되면 변경
  if (error) return <div>{error}</div>;

  return (
    <div className="relative h-screen overflow-hidden bg-[#FFFFFF]">
      <div className="absolute inset-0 z-0">
        <MapView />
      </div>
      <div className="relative z-10">
        <div className="flex">
          <NavBar />
          {/* <RecommendationPanel spaceData={spaceData} /> */}
        </div>

        {/* 임시 버튼 */}
        {/* <div className="flex gap-4 fixed top-4 right-4">
          <RetrySurveyButton />
          <SatisfactionModalButton />
        </div> */}
      </div>
    </div>
  );
}

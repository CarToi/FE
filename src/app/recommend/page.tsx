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
    <div className="relative h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pt-10 sm:pt-0">
        <div className="flex h-[50vh] w-screen sm:ml-auto sm:h-screen sm:w-[50vw] sm:min-w-[calc(100vw-750px)]">
          <MapView />
        </div>
      </div>
      <div className="pointer-events-none relative z-10">
        <div className="flex h-screen flex-col sm:flex-row">
          <NavBar />
          <RecommendationPanel spaceData={spaceData} />
        </div>

        {/* 임시 버튼 */}
        <div className="pointer-events-auto fixed top-4 right-4 flex gap-4">
          <RetrySurveyButton />
          <SatisfactionModalButton />
        </div>
      </div>
    </div>
  );
}

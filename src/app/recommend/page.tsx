"use client";

import { useEffect, useState } from "react";
import { fetchRecommendation } from "@/lib/apis/survey";
import SideBar from "./_components/SideBar";
import SidePanel from "./_components/SidePanel";
import BackToSurveyButton from "./_components/BackToSurveyButton";
import MapView from "./_components/MapView";
import TransitionScreen from "@/app/_components/TransitionScreen";

export default function RecommendPage() {
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId") || "";
    const onboarding = JSON.parse(
      localStorage.getItem("onboardingAnswers") ?? "[]"
    );

    const payload = {
      clientId: userId,
      age: Number(onboarding[0]?.substr(0, 2) || 0),
      gender: onboarding[1],
      resident: onboarding[2],
      city: onboarding[3],
      want: onboarding[5],
      mood: onboarding[6],
    };

    setIsLoading(true);
    setError(null);

    fetchRecommendation(payload)
      .then((data) => {
        setSpaceData(data);
      })
      .catch((err) => {
        console.error(err);
        setError("추천 정보를 불러오는 데 실패했어요.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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

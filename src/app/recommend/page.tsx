"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "./_components/SideBar";
import SidePanel from "./_components/SidePanel";
import BackToSurveyButton from "./_components/BackToSurveyButton";
import MapView from "./_components/MapView";

export default function RecommendPage() {
  const [spaceData, setSpaceData] = useState([]);

  useEffect(() => {
    const submitTodayMood = async () => {
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

      try {
        const res = await axios.post(
          "https://saegil.store/api/survey/recommendation",
          payload
        );
        setSpaceData(res.data);
      } catch (err) {
        console.error("추천 API 실패:", err);
        alert("추천 정보를 불러오는 데 실패했어요.");
      }
    };

    submitTodayMood();
  }, []);

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

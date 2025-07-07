// hooks/useSurveyRecommendation.ts
import { useEffect, useState } from "react";
import { fetchRecommendation } from "@/lib/apis/survey";
import { RecommendationRequest, RecommendationResponse } from "@/lib/type";

export function useSurveyRecommendation() {
  const [spaceData, setSpaceData] = useState<RecommendationResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId") || "";
    const onboarding = JSON.parse(
      localStorage.getItem("onboardingAnswers") ?? "[]"
    );

    const payload: RecommendationRequest = {
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

  return { spaceData, isLoading, error };
}

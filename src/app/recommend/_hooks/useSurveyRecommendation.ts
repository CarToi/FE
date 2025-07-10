import { useEffect, useState } from "react";
import { fetchRecommendation } from "@/lib/apis/survey";
import { RecommendationRequest, RecommendationResponse } from "@/lib/type";

export function useSurveyRecommendation() {
  const [spaceData, setSpaceData] = useState<RecommendationResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    const clientId = localStorage.getItem("userId") || "";
    const onboarding = JSON.parse(
      localStorage.getItem("onboardingAnswers") ?? "[]"
    );

    const payload: RecommendationRequest = {
      clientId,
      age: Number(onboarding[0]?.substr(0, 2) || 0),
      gender: onboarding[1],
      resident: onboarding[2],
      city: onboarding[3],
      want: onboarding[5],
      mood: onboarding[6],
    };

    try {
      const res = await fetchRecommendation(payload);
      setSpaceData(res);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { spaceData, isLoading, isError };
}

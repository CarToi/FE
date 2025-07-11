import { useState } from "react";
import { useRouter } from "next/navigation";
import { postSurvey } from "@/lib/apis/survey";
import { SurveyRequest } from "@/lib/type";

export function usePostSurvey() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setIsLoading(true);
    setIsError(false);

    const clientId = localStorage.getItem("userId") || "";
    const onboarding = JSON.parse(
      localStorage.getItem("onboardingAnswers") ?? "[]"
    );

    const payload: SurveyRequest = {
      clientId,
      age: Number(onboarding[0]?.substr(0, 2) || 0),
      gender: onboarding[1],
      resident: onboarding[2],
      city: onboarding[3],
      want: onboarding[5],
      mood: onboarding[6],
    };

    try {
      await postSurvey(payload);
      router.push("/recommend");
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
  };

  return { handleSubmit, isLoading, isError };
}

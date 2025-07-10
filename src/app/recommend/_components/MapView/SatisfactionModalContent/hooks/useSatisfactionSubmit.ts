import { useState } from "react";
import { UpdateRequest } from "@/lib/type";
import { updateSatisfactionScore } from "@/lib/apis/survey";

export function useSatisfactionSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = async (satisfactions: number[]) => {
    setIsLoading(true);
    setError(null);

    const clientId = localStorage.getItem("userId") || "";

    const payload: UpdateRequest = {
      clientId,
      satisfactions,
    };

    try {
      await updateSatisfactionScore(payload);
    } catch (err) {
      console.error(err);
      setError("만족도 정보를 전송하는 데 실패했어요.");
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, error };
}

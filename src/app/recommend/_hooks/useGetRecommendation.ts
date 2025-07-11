import { useEffect, useState } from "react";
import { getRecommendation } from "@/lib/apis/survey";
import { RecommendationResponse } from "@/lib/type";

export function useGetRecommendation() {
  const [spaceData, setSpaceData] = useState<RecommendationResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    const clientId = localStorage.getItem("userId") || "";

    try {
      const res = await getRecommendation(clientId);
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

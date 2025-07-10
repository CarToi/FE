import { useState } from "react";
import { useRouter } from "next/navigation";
import { UpdateRequest } from "@/lib/type";
import { updateSatisfactionScore } from "@/lib/apis/survey";

export function useSatisfactionSubmit(onClose: () => void) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (satisfactions: number[]) => {
    setIsLoading(true);
    setIsError(false);

    const clientId = localStorage.getItem("userId") || "";

    const payload: UpdateRequest = {
      clientId,
      satisfactions,
    };

    try {
      await updateSatisfactionScore(payload);
      onClose();
      router.push("/submit-success");
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading, isError };
}

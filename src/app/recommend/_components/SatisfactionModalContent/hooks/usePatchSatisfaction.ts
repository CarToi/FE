import { useState } from "react";
import { useRouter } from "next/navigation";
import { SatisfactionRequest } from "@/lib/type";
import { patchSatisfaction } from "@/lib/apis/survey";

export function usePatchSatisfaction(onClose: () => void) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const router = useRouter();

  const handleSubmit = async (satisfactions: number[]) => {
    setIsLoading(true);
    setIsError(false);

    const clientId = localStorage.getItem("userId") || "";

    const payload: SatisfactionRequest = {
      clientId,
      satisfactions,
    };

    try {
      await patchSatisfaction(payload);
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

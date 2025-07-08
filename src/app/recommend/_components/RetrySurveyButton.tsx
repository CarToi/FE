import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function RetrySurveyButton() {
  const router = useRouter();

  const handleBackToSurvey = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <Button
      variant="secondary"
      style="outlined"
      width={160}
      onClick={handleBackToSurvey}
    >
      다시 추천받기
    </Button>
  );
}

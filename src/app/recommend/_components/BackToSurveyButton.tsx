import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function BackToSurveyButton() {
  const router = useRouter();

  const handleBackToSurvey = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="fixed top-4 right-4">
      <Button variant="primary" width={160} onClick={handleBackToSurvey}>
        다시 설문하기
      </Button>
    </div>
  );
}

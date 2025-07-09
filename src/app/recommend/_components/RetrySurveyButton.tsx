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
      color="white"
      onClick={handleBackToSurvey}
      className="text-body-small sm:text-body-large h-[37px] w-[119px] rounded-md sm:h-[62px] sm:w-[166px] sm:rounded-xl"
    >
      새로운 추천받기
    </Button>
  );
}

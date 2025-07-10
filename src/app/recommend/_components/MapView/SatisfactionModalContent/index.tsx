import Button from "@/components/Button";
import SatisfactionForm from "./SatisfactionForm";
import { useState } from "react";
import { updateSatisfactionScore } from "@/lib/apis/survey";
import { UpdateRequest } from "@/lib/type";

export default function SatisfactionModalContent({
  onClose,
}: {
  onClose: () => void;
}) {
  const [satisfactionScores, setSatisfactionScores] = useState([0, 0, 0]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const userId = localStorage.getItem("userId") || "";

  const payload: UpdateRequest = {
    clientId: userId,
    satisfactions: satisfactionScores,
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await updateSatisfactionScore(payload);
      setSatisfactionScores([0, 0, 0]);
      onClose();
    } catch (err) {
      console.error(err);
      setError("만족도 정보를 전송하는 데 실패했어요.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading</div>; // 로딩 페이지 시안 완성되면 변경
  if (error) return <div>{error}</div>; // 에러 페이지 시안 완성되면 변경

  return (
    <div className="flex h-full flex-col gap-8 sm:gap-16">
      <div className="flex shrink-0 flex-col gap-1 sm:gap-2.5">
        <h1 className="text-title-small sm:text-heading-small text-[#1F2229]">
          추천받는 과정은 어떠셨나요?
        </h1>
        <p className="text-body-small sm:text-body-medium text-[#79839A]">
          작은 의견 하나가 더 나은 새길을 만드는 데 큰 힘이 돼요 :)
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-10 overflow-y-auto sm:gap-12">
        <SatisfactionForm
          scores={satisfactionScores}
          setScores={setSatisfactionScores}
        />
      </div>
      <div className="flex shrink-0 justify-center gap-3">
        <Button
          color="gray"
          onClick={onClose}
          className="text-body-large h-[62px] w-full max-w-[150px] rounded-xl sm:w-[150px]"
        >
          다음에 하기
        </Button>
        <Button
          color="blue"
          onClick={handleSubmit}
          className="text-body-large h-[62px] w-full max-w-[150px] rounded-xl sm:w-[150px]"
          disabled={false}
        >
          보내기
        </Button>
      </div>
    </div>
  );
}

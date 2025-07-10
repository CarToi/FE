import { useState } from "react";
import { useSatisfactionSubmit } from "./hooks/useSatisfactionSubmit";
import SatisfactionForm from "./SatisfactionForm";
import Button from "@/components/Button";

export default function SatisfactionModalContent({
  onClose,
}: {
  onClose: () => void;
}) {
  const [satisfactionScores, setSatisfactionScores] = useState([0, 0, 0]);

  const { handleSubmit, isLoading, error } = useSatisfactionSubmit(() => {
    setSatisfactionScores([0, 0, 0]);
    onClose();
  });

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
          onClick={() => handleSubmit(satisfactionScores)}
          className="text-body-large h-[62px] w-full max-w-[150px] rounded-xl sm:w-[150px]"
          disabled={false}
        >
          보내기
        </Button>
      </div>
    </div>
  );
}

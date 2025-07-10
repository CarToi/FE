import CancelButton from "./CancelButton";
import SubmitButton from "./SubmitButton";

export default function SatisfactionModalContent({
  onClose,
}: {
  onClose: () => void;
}) {
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
      <div className="flex-1 overflow-y-auto"></div>
      <div className="flex shrink-0 justify-center gap-3">
        <CancelButton onClose={onClose} />
        <SubmitButton onClose={onClose} />
      </div>
    </div>
  );
}

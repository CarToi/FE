import Button from "@/components/Button";

export default function SatisfactionModalButton({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <Button
      color="blue"
      onClick={onOpen}
      className="text-body-small sm:text-body-large h-[37px] w-[107px] rounded-md sm:h-[62px] sm:w-[149px] sm:rounded-xl"
    >
      서비스 만족도
    </Button>
  );
}

import Button from "@/components/Button";

export default function CancelButton({ onClose }: { onClose: () => void }) {
  return (
    <Button
      color="gray"
      onClick={onClose}
      className="text-body-large h-[62px] w-full max-w-[150px] rounded-xl sm:w-[150px]"
    >
      다음에 하기
    </Button>
  );
}

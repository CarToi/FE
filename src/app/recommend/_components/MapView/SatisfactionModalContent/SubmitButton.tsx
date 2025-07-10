import Button from "@/components/Button";

export default function SubmitButton({ onClose }: { onClose: () => void }) {
  return (
    <Button
      color="blue"
      onClick={onClose}
      className="text-body-large h-[62px] w-full max-w-[150px] rounded-xl sm:w-[150px]"
      disabled={false}
    >
      보내기
    </Button>
  );
}

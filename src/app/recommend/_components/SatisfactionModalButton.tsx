import Button from "@/components/Button";

export default function SatisfactionModalButton({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <div className="group relative flex flex-col gap-4">
      <div className="flex justify-end">
        <Button
          color="blue"
          onClick={onOpen}
          className="text-body-small sm:text-body-large h-[37px] w-[107px] rounded-md sm:h-[62px] sm:w-[149px] sm:rounded-xl"
        >
          서비스 만족도
        </Button>
      </div>
      <div className="relative hidden w-[300px] rounded-xl bg-[#353A46] p-3 text-white opacity-80 duration-100 group-hover:block">
        <p className="text-body-small flex justify-center text-center">
          서비스 이용은 어떠셨나요?
          <br />
          소중한 의견으로 더 나은 서비스를 만들게요!
        </p>
        <div className="absolute right-3 bottom-full h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-[#353A46] opacity-80" />
      </div>
    </div>
  );
}

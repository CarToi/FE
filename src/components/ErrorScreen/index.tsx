import BadEmoji from "@/assets/icons/emoji_poor.svg";

export default function ErrorScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <BadEmoji className="size-[50px] text-[#F61832] sm:size-16" />
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-title-small sm:text-title-medium text-[#F61832]">
          앗, 문제가 생겼어요!
        </h3>
        <p className="text-body-small sm:text-body-medium text-[#79839A]">
          다시 한 번 시도해주세요
        </p>
      </div>
    </div>
  );
}

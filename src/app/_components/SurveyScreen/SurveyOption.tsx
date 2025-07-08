import clsx from "clsx";
import Image from "next/image";
import checkDefault from "@/assets/icons/check_default.svg";
import checkActive from "@/assets/icons/check_active.svg";

interface SurveyOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function SurveyOption({
  text,
  isSelected,
  onClick,
}: SurveyOptionProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "flex cursor-pointer items-center justify-between rounded-[12px] border-[2px] bg-[#F7F9FD] py-[16px] pr-[40px] pl-[24px]",
        isSelected ? "border-[#577DD1]" : "border-[#F7F9FD]"
      )}
    >
      <p
        className={clsx(
          "text-body-large",
          isSelected ? "text-[#3560C0]" : "text-[#B3B9C6]"
        )}
      >
        {text}
      </p>
      <Image src={isSelected ? checkActive : checkDefault} alt="" />
    </div>
  );
}

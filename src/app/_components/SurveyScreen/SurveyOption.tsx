import clsx from "clsx";
import Image from "next/image";
import checkDefault from "@/assets/icons/check.png";
import checkActive from "@/assets/icons/check_current.png";

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
        "flex justify-between items-center pl-[24px] pr-[40px] py-[16px] bg-[#F7F9FD] rounded-[12px] border-[2px] cursor-pointer",
        isSelected ? "border-[#577DD1]" : "border-[#F7F9FD]"
      )}
    >
      <p
        className={clsx(
          "text-[20px] font-[600] leading-[150%]",
          isSelected ? "text-[#3560C0]" : "text-[#B3B9C6]"
        )}
      >
        {text}
      </p>
      <Image src={isSelected ? checkActive : checkDefault} alt="" />
    </div>
  );
}

import clsx from "clsx";
import { Check } from "lucide-react";

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
      <Check size={24} color={isSelected ? "#3560C0" : "#B3B9C6"} />
    </div>
  );
}

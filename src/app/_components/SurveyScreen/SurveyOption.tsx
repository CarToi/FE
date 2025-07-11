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
        "flex cursor-pointer items-center justify-between rounded-xl border-2 py-4 pr-10 pl-6 transition-colors duration-100",
        isSelected
          ? "border-[#577DD1] bg-[#F7F9FD]"
          : "border-[#F6F7F8] bg-[#F6F7F8] text-[#B3B9C6] hover:bg-[#F7F9FD] hover:text-[#3560C0]"
      )}
    >
      <p
        className={clsx("text-body-large", isSelected ? "text-[#3560C0]" : "")}
      >
        {text}
      </p>
      <Check size={24} className={isSelected ? "text-[#3560C0]" : ""} />
    </div>
  );
}

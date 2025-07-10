import { satisfactionData } from "@/constants/satisfactionData";
import BadEmoji from "@/assets/icons/emoji_bad.svg";
import PoorEmoji from "@/assets/icons/emoji_poor.svg";
import NeutralEmoji from "@/assets/icons/emoji_neutral.svg";
import GoodEmoji from "@/assets/icons/emoji_good.svg";
import ExcellentEmoji from "@/assets/icons/emoji_excellent.svg";

const emojis = [BadEmoji, PoorEmoji, NeutralEmoji, GoodEmoji, ExcellentEmoji];

export default function SatisfactionForm() {
  return (
    <>
      {satisfactionData.map((data, index) => (
        <div key={index} className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-title-xsmall sm:text-title-small text-[#353A46]">
            {data.question}
          </h3>
          <div className="flex justify-between gap-1">
            {data.scores.map((scoreText, index) => {
              const Emoji = emojis[index];
              return (
                <button
                  key={index}
                  onClick={() => {}}
                  className="flex flex-1 flex-col items-center gap-2 sm:gap-3"
                >
                  <Emoji className="size-6 text-[#969EB0] sm:size-10" />
                  <p className="sm:text-body-medium text-link-small text-[#969EB0]">
                    {scoreText}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

import { satisfactionData } from "@/constants/satisfactionData";
import BadEmoji from "@/assets/icons/emoji_bad.svg";
import PoorEmoji from "@/assets/icons/emoji_poor.svg";
import NeutralEmoji from "@/assets/icons/emoji_neutral.svg";
import GoodEmoji from "@/assets/icons/emoji_good.svg";
import ExcellentEmoji from "@/assets/icons/emoji_excellent.svg";

const emojis = [BadEmoji, PoorEmoji, NeutralEmoji, GoodEmoji, ExcellentEmoji];
const selectedColor = ["#F84B5F", "#3C98A4", "#53B3C0", "#577DD1", "#3560C0"];

interface SatisfactionFormProps {
  scores: number[];
  setScores: (scores: number[]) => void;
}

export default function SatisfactionForm({
  scores,
  setScores,
}: SatisfactionFormProps) {
  const handleScoreChange = (questionIndex: number, score: number) => {
    const updatedScores = [...scores];
    updatedScores[questionIndex] = score;
    setScores(updatedScores);
  };

  return (
    <>
      {satisfactionData.map((data, questionIndex) => (
        <div key={questionIndex} className="flex flex-col gap-4 sm:gap-6">
          <h3 className="text-title-xsmall sm:text-title-small text-[#353A46]">
            {data.question}
          </h3>
          <div className="flex justify-between gap-1">
            {data.scores.map((scoreText, scoreIndex) => {
              const Emoji = emojis[scoreIndex];
              const isSelected = scores[questionIndex] === scoreIndex + 1;
              return (
                <button
                  key={scoreIndex}
                  onClick={() =>
                    handleScoreChange(questionIndex, scoreIndex + 1)
                  }
                  className="flex flex-1 cursor-pointer flex-col items-center gap-2 sm:gap-3"
                >
                  <Emoji
                    className="size-6 sm:size-10"
                    style={{
                      color: isSelected ? selectedColor[scoreIndex] : "#969EB0",
                    }}
                  />
                  <p
                    className="sm:text-body-medium text-link-small"
                    style={{
                      color: isSelected ? selectedColor[scoreIndex] : "#969EB0",
                    }}
                  >
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

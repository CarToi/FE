"use client";

import { useState } from "react";
import axios from "axios";

const scores = [
  { score: 5, text: ["최고에요", "매우 충분해요", "많이 느꼈어요"] },
  { score: 4, text: ["좋아요", "충분해요", "조금 느꼈어요"] },
  { score: 3, text: ["보통이에요", "보통이에요", "보통이에요"] },
  { score: 2, text: ["그냥 그래요", "부족해요", "그냥 그래요"] },
  { score: 1, text: ["아쉬워요", "매우 부족해요", "별로에요"] },
];

export default function PopupTestPage({ routing }) {
  const [satisfactions, setSatisfactions] = useState([0, 0, 0]);

  const handleScoreClick = (index, score) => {
    const nextScore = satisfactions.map((satisfaction, i) =>
      i === index ? score : satisfaction
    );
    setSatisfactions(nextScore);
  };

  const handleSubmitClick = async () => {
    const userId = localStorage.getItem("userId") || "";

    const payload = {
      clientId: userId,
      satisfactions: satisfactions,
    };

    if (true) {
      try {
        const response = await axios.patch(
          "https://saegil.store/api/survey/update",
          payload
        );
        routing("ToRecommendTransition");
      } catch (error) {
        console.error("만족도 API 호출 실패:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <button
        className="bg-[#CCCCCC] px-[8px] py-[4px]"
        onClick={handleSubmitClick}
      >
        보내기
      </button>
      <div>
        <div>
          <p>Q1. 추천드린 장소는 도움이 됐나요?</p>
          <div className="flex gap-[8px]">
            {scores.map((score, index) => (
              <button
                key={index}
                className="bg-[#CCCCCC] px-[8px] py-[4px]"
                onClick={() => handleScoreClick(0, score.score)}
              >
                {score.text[0]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p>Q2. 놀 거리나 볼 거리가 충분했나요?</p>
          <div className="flex gap-[8px]">
            {scores.map((score, index) => (
              <button
                key={index}
                className="bg-[#CCCCCC] px-[8px] py-[4px]"
                onClick={() => handleScoreClick(1, score.score)}
              >
                {score.text[1]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p>Q3. 지역에서의 생활에 매력을 느끼셨나요?</p>
          <div className="flex gap-[8px]">
            {scores.map((score, index) => (
              <button
                key={index}
                className="bg-[#CCCCCC] px-[8px] py-[4px]"
                onClick={() => handleScoreClick(2, score.score)}
              >
                {score.text[2]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

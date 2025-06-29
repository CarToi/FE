"use client";

import Logo from "@/assets/icons/logo.png";
import Image from "next/image";
import { useEffect } from "react";

export default function LandingPage({ routing }) {
  useEffect(() => {
    const userID = localStorage.getItem("USID");
    const isOnboardingComplete = localStorage.getItem("isOnboardingComplete");
    if (userID && isOnboardingComplete) {
      routing("RecommendPage");
    } else {
      createNewUser();
      setTimeout(() => {
        routing("OnboardingPage");
      }, 1000);
    }
  }, []);

  return (
    <div className="flex items-center w-full h-screen bg-[#F7F9FD]">
      <div className="flex flex-col items-center gap-[40px] w-full">
        <Image src={Logo} alt="" />
        <div className="flex flex-col items-center gap-[24px] w-full">
          <h2 className="text-[#142448] text-center text-[36px] font-[700] leading-[120%]">
            새길에 오신 것을 환영해요!
          </h2>
          <p className="text-[#7F9CDC] text-center text-[22px] font-[600] leading-[150%]">
            먼저 간단한 정보부터 시작해볼까요?
          </p>
        </div>
      </div>
    </div>
  );
}

function createNewUser() {
  const time = new Date();
  const userID =
    "" +
    time.getFullYear() +
    time.getMonth() +
    time.getDate() +
    time.getHours() +
    time.getMinutes() +
    time.getSeconds() +
    time.getMilliseconds() +
    Math.floor(Math.random() * 1000);

  localStorage.setItem("USID", userID);
  localStorage.setItem(
    "onboardingAnswers",
    JSON.stringify(["", "", "", "", "", "", ""])
  );
  localStorage.setItem("todayMoodAnswers", JSON.stringify(["", ""]));
}

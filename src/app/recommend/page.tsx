"use client";

import Image from "next/image";
import Logo from "@/assets/icons/logo.png";
import LogoDev from "@/assets/icons/logo_dev.png";
import LogoKR from "@/assets/icons/logo_kr.png";
import Pin from "@/assets/icons/pin.png";
import Temp from "@/assets/icons/temp.jpg";
import MapPin from "@/assets/icons/map_pin.png";
import ChevronLeft from "@/assets/icons/chevron-left.png";
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRouter } from "next/navigation";
import axios from "axios";

const category = {
  TOUR: "여행",
  CULTURE: "문화",
  FESTIVAL: "축제",
};

export default function RecommendPage() {
  const router = useRouter();
  const [spaceDatas, setSpaceDatas] = useState([]);

  useEffect(() => {
    const submitTodayMood = async () => {
      const USID = localStorage.getItem("USID") || "";
      const onboarding =
        JSON.parse(localStorage.getItem("onboardingAnswers")) || [];

      const payload = {
        clientId: USID,
        age: Number(onboarding[0]?.substr(0, 2) || 0),
        gender: onboarding[1],
        resident: onboarding[2],
        city: onboarding[3],
        want: onboarding[5],
        mood: onboarding[6],
      };

      try {
        const res = await axios.post(
          "https://saegil.store/api/survey/recommendation",
          payload
        );
        setSpaceDatas(res.data);
      } catch (err) {
        console.error("추천 API 실패:", err);
        alert("추천 정보를 불러오는 데 실패했어요.");
      }
    };

    submitTodayMood();
  }, []);

  const handleLocalStorageClear = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="bg-[#FFFFFF] h-screen overflow-hidden ">
      <div className="flex flex-col">
        <button onClick={handleLocalStorageClear}>로컬 스토리지 비우기</button>
      </div>
      <div className="flex">
        <div className="flex">
          <SideMenu />
          <SideMenuRecommend spaceDatas={spaceDatas} />
        </div>
        <Map
          id="map"
          center={{
            lat: 35.82,
            lng: 126.59,
          }}
          style={{
            width: "100%",
            height: "100vh",
          }}
          level={9}
        >
          <MapMarker
            position={{
              lat: 35.82,
              lng: 126.589072,
            }}
          ></MapMarker>
        </Map>
      </div>
    </div>
  );
}

function SideMenu() {
  return (
    <div className="flex flex-col justify-between items-center w-[72px] h-screen overflow-hidden pt-[13px] border-r-1 border-[#EEEFF2] bg-[#FFFFFF]">
      <Image src={Logo} alt="" width={40} height={50} />
      <div className="flex flex-col justify-between items-center gap-[48px]">
        <div className="flex flex-col justify-between items-center gap-[8px] px-[12px] py-[12px]">
          <Image src={Pin} alt="" />
          <p>추천</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-[24px] py-[40px]">
        <Image src={LogoDev} alt="" width={32} height={32} />
        <Image src={LogoKR} alt="" width={32} height={32} />
      </div>
    </div>
  );
}

function SideMenuRecommend({ spaceDatas }) {
  return (
    <div className="relative flex flex-col gap-[40px] w-[750px] h-screen overflow-hidden  rounded-tr-[20px] rounded-br-[20px] pl-[40px] pr-[20px] py-[40px] bg-[#FFFFFF]">
      <div className="absolute bg-[#FFFFFF] rounded-[9px] w-[40px] h-[40px] right-[-20px] top-[150px] p-[6px]">
        <Image src={ChevronLeft} alt="" width={28} height={28} />
      </div>
      <div className="flex flex-col gap-[16px]">
        <h2 className="text-[#1F2229] text-[24px] font-[700] leading-[150%]">
          새길이 오늘 기분에 딱 맞는
          <br />
          장소를 추천해드릴게요!
        </h2>
        <p className="text-[#79839A] text-[16px] font-[500] leading-[150%]">
          오늘은 어디로 갈지 골라볼까요? 도착 시간도 함께 알려드릴게요
        </p>
      </div>
      <div className="flex flex-wrap gap-[20px] w-[690px] overflow-x-auto scrollbar-overlay">
        {spaceDatas.map((spaceData, index) => (
          <SpaceCard key={index} spaceData={spaceData} />
        ))}
      </div>
    </div>
  );
}

function SpaceCard({ spaceData }) {
  const city = getCity(spaceData.position);
  return (
    <div className="w-[325px]">
      <Image
        className="rounded-[6px] h-[180px]"
        src={spaceData.image || Temp}
        alt=""
        width={325}
        height={180}
        unoptimized
      />
      <div className="flex justify-between items-center mt-[12px]">
        <h2 className="text-[#3560C0] text-[20px] font-[600] leading-[150%]">
          {spaceData.title}
        </h2>
      </div>
      <div className="flex justify-start items-center gap-[4px] mt-[4px]">
        <Image src={MapPin} alt="" width={16} height={16} />
        <p>{spaceData.position}</p>
      </div>
      <div className="flex gap-[8px] mt-[8px]">
        <div className="px-[12px] py-[4px] bg-[#F7F9FD] rounded-[6px] text-[#3560C0] text-[14px] font-[500] leading-[150%]">
          {category[spaceData.category]}
        </div>
        {city && (
          <div className="px-[12px] py-[4px] bg-[#E9F5F7] rounded-[6px] text-[#3C98A4] text-[14px] font-[500] leading-[150%]">
            {city}
          </div>
        )}
      </div>
    </div>
  );
}

function getCity(position) {
  if (position.indexOf("군산") > -1) {
    return "군산";
  }
  if (position.indexOf("김제") > -1) {
    return "김제";
  }
  if (position.indexOf("부안") > -1) {
    return "부안";
  }
  return null;
}

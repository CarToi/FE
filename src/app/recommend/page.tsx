"use client";

import { useState } from "react";
import { useSurveyRecommendation } from "./_hooks/useSurveyRecommendation";
import NavBar from "./_components/NavBar";
import RecommendationPanel from "./_components/RecommendationPanel";
import MapView from "./_components/MapView";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import SatisfactionModalContent from "./_components/MapView/SatisfactionModalContent";
import TransitionScreen from "@/app/_components/TransitionScreen";

export default function RecommendPage() {
  const [isOpen, setIsOpen] = useState(false);

  const { spaceData, isLoading, error } = useSurveyRecommendation();

  if (isLoading) return <TransitionScreen type="toRecommend" />;
  if (error) return <div>{error}</div>; // 에러 페이지 시안 완성되면 변경

  return (
    <>
      <div className="relative h-screen overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pt-10 sm:pt-0">
          <div className="flex h-[50vh] w-screen sm:ml-auto sm:h-screen sm:w-[50vw] sm:min-w-[calc(100vw-750px)]">
            <MapView spaceData={spaceData} />
          </div>
        </div>
        <div className="pointer-events-none relative z-10">
          <div className="flex h-screen flex-col sm:flex-row">
            <NavBar />
            <RecommendationPanel spaceData={spaceData} />
          </div>
          <div className="pointer-events-auto fixed top-14 right-4 flex gap-2 sm:top-5 sm:right-5 sm:gap-5">
            <Button
              color="blue"
              onClick={() => setIsOpen(true)}
              className="text-body-small sm:text-body-large h-[37px] w-[107px] rounded-md sm:h-[62px] sm:w-[149px] sm:rounded-xl"
            >
              서비스 만족도
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SatisfactionModalContent onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
}

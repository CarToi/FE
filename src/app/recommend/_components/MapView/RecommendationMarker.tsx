import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { Coordinate } from "@/utils/getMidpoint";
import Image from "next/image";

interface RecommendationMarkerProps {
  position: Coordinate;
}

export default function RecommendationMarker({
  position,
}: RecommendationMarkerProps) {
  return (
    <>
      <MapMarker
        position={position}
        image={{
          src: "/icons/marker_recommendation.svg",
          size: {
            width: 51,
            height: 63,
          },
        }}
      />
      <CustomOverlayMap position={position} yAnchor={1.25}>
        <div className="size-[43px]">
          <div className="relative m-auto size-9">
            <Image
              src="https://www.saemangeum.go.kr/resources/images/culturetour/tour_spot/img_tour_spot_ba10.jpg"
              fill
              className="rounded-full object-cover"
              alt=""
            />
          </div>
        </div>
      </CustomOverlayMap>
    </>
  );
}

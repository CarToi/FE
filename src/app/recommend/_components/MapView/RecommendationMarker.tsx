import { CustomOverlayMap, MapMarker } from "react-kakao-maps-sdk";
import { RecommendationResponse } from "@/lib/type";
import Image from "next/image";
import Temp from "../../../../../public/images/temp.jpg";

interface RecommendationMarkerProps extends RecommendationResponse {
  onClick?: () => void;
}

export default function RecommendationMarker({
  image,
  coordinate,
  onClick,
}: RecommendationMarkerProps) {
  if (!coordinate) return null;

  const coord = { lat: coordinate.latitude, lng: coordinate.longitude };

  return (
    <>
      <MapMarker
        position={coord}
        image={{
          src: "/icons/marker_recommendation.svg",
          size: {
            width: 51,
            height: 63,
          },
        }}
      />
      <CustomOverlayMap position={coord} yAnchor={1.25}>
        <div className="size-[43px]" onClick={onClick}>
          <div className="relative m-auto size-9">
            <Image
              src={image || Temp}
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

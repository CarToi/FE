"use client";

import { Map, MapMarker, Polyline, useKakaoLoader } from "react-kakao-maps-sdk";
import { RecommendationResponse } from "@/lib/type";
import { COORDINATE } from "@/constants/spaceData";
import { getMidpoint } from "@/utils/getMidpoint";
import { getDestination } from "@/utils/getDestination";
import RecommendationMarker from "./RecommendationMarker";

export default function MapView({
  spaceData,
}: {
  spaceData: RecommendationResponse[];
}) {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!,
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const origin = COORDINATE.SAEMANGEUM;
  const destination = getDestination();
  const midpoint = getMidpoint(origin, destination);

  return (
    <Map level={8} center={midpoint} style={{ width: "100%", height: "100%" }}>
      {/* 추천 지점 마커 */}
      {spaceData.map((space, index) => (
        <RecommendationMarker key={index} {...space} />
      ))}

      {/* 시작 지점 마커 */}
      <MapMarker
        position={origin}
        image={{
          src: "/icons/marker.svg",
          size: {
            width: 42,
            height: 55,
          },
        }}
      />

      {/* 도착 지점 마커 */}
      <MapMarker
        position={destination}
        image={{
          src: "/icons/marker.svg",
          size: {
            width: 42,
            height: 55,
          },
        }}
      />

      {/* 경로 */}
      <Polyline
        path={[[origin, midpoint, destination]]}
        strokeWeight={5}
        strokeColor={"#F84B5F"}
        strokeOpacity={0.7}
        strokeStyle={"solid"}
      />
    </Map>
  );
}

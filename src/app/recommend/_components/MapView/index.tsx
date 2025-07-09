"use client";

import { Map, MapMarker, Polyline, useKakaoLoader } from "react-kakao-maps-sdk";
import { RecommendationResponse } from "@/lib/type";
import { COORDINATE } from "@/constants/spaceData";
import { Coordinate, getMidpoint } from "@/utils/getMidpoint";
import { getDestination } from "@/utils/getDestination";
import RecommendationMarker from "./RecommendationMarker";
import { useState } from "react";

export default function MapView({
  spaceData,
}: {
  spaceData: RecommendationResponse[];
}) {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!,
  });
  const [selectedSpace, setSelectedSpace] = useState<Coordinate | null>(null);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const origin = COORDINATE.SAEMANGEUM;
  const destination = getDestination();
  const midpoint = getMidpoint(origin, destination);

  return (
    <Map level={10} center={midpoint} style={{ width: "100%", height: "100%" }}>
      {/* 추천 지점 마커 */}
      {spaceData.map((space, index) => (
        <RecommendationMarker
          key={index}
          {...space}
          onClick={() => {
            if (space.coordinate) {
              setSelectedSpace({
                lat: space.coordinate.latitude,
                lng: space.coordinate.longitude,
              });
            }
          }}
        />
      ))}

      {/* 시작 지점 마커 */}
      <MapMarker
        position={origin}
        image={{
          src: "/icons/marker_origin.svg",
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
          src: "/icons/marker_destination.svg",
          size: {
            width: 42,
            height: 55,
          },
        }}
      />

      {/* 경로 */}
      <Polyline
        path={[
          [
            origin,
            ...(selectedSpace ? [selectedSpace] : [midpoint]),
            destination,
          ],
        ]}
        strokeWeight={5}
        strokeColor={"#F84B5F"}
        strokeOpacity={0.8}
        strokeStyle={"solid"}
      />
    </Map>
  );
}

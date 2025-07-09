"use client";

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { COORDINATE } from "@/constants/spaceData";
import { getMidpoint } from "@/utils/getMidpoint";
import { getDestination } from "@/utils/getDestination";

export default function MapView() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!,
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const origin = COORDINATE.SAEMANGEUM;
  const destination = getDestination();
  const midpoint = getMidpoint(origin, destination);

  return (
    <Map level={7} center={midpoint} style={{ width: "100%", height: "100%" }}>
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

      <MapMarker position={midpoint}>
        <div style={{ color: "#000" }}>중간</div>
      </MapMarker>
    </Map>
  );
}

"use client";

import { Map, MapMarker, Polyline, useKakaoLoader } from "react-kakao-maps-sdk";

export default function MapView() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_APPKEY!,
  });
  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <Map
      level={3}
      center={{ lat: 35.9468421595771, lng: 126.5854974078118 }}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker position={{ lat: 35.9468421595771, lng: 126.5854974078118 }}>
        <div style={{ color: "#000" }}>새만금 국가산업단지</div>
      </MapMarker>
      <MapMarker position={{ lat: 35.9468421595771, lng: 126.654457 }}>
        <div style={{ color: "#000" }}>중간</div>
      </MapMarker>
      <MapMarker position={{ lat: 35.970944, lng: 126.5854974078118 }}>
        <div style={{ color: "#000" }}>도착</div>
      </MapMarker>
      <Polyline
        path={[
          [
            { lat: 35.9468421595771, lng: 126.5854974078118 },
            { lat: 35.9468421595771, lng: 126.654457 },
            { lat: 35.970944, lng: 126.5854974078118 },
          ],
        ]}
        strokeWeight={5} // 선의 두께 입니다
        strokeColor={"red"} // 선의 색깔입니다
        strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle={"solid"} // 선의 스타일입니다
      />
    </Map>
  );
}

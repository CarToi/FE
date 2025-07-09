"use client";

import Bad from "../../../public/icons/emoji_bad.svg";
import Image from "next/image";

export default function MapPage() {
  return (
    <div>
      <div>테스트 페이지</div>
      <Bad className="text-red-500" />
      <Image src={Bad} alt="" />
    </div>
  );
}

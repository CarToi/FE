"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/Button";

export default function SubmitSuccessPage() {
  const router = useRouter();

  const handleRetrySurvey = () => {
    localStorage.clear();
    router.push("/");
  };

  return (
    <div className="m-auto flex h-screen w-full flex-col items-center justify-center gap-10">
      <h2 className="text-display">설문에 응해주셔서 감사합니다</h2>
      <Link href="https://www.google.co.kr/" className="text-slate-700">
        서비스를 평가하고 아메리카노를 받아가세요!
      </Link>
      <Button
        color="blue"
        className="text-body-large h-[62px] w-full max-w-[335px] rounded-xl sm:w-[335px]"
        onClick={handleRetrySurvey}
      >
        다시 설문조사하기
      </Button>
    </div>
  );
}

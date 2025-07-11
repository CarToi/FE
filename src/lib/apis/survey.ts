import axios from "@/lib/axiosInstance";
import { SurveyRequest, SatisfactionRequest } from "../type";

// 사용자 설문 결과 요청
export async function postSurvey(payload: SurveyRequest) {
  try {
    await axios.post("/survey/recommendation", payload);
  } catch (err) {
    console.error("사용자 설문 결과 보내기 실패:", err);
    throw err;
  }
}

// 사용자 설문 결과 반환
export async function getRecommendation(clientId: string) {
  try {
    const res = await axios.get(`/survey?clientId=${clientId}`);
    return res.data;
  } catch (err) {
    console.error("추천 장소 데이터 불러오기 실패:", err);
    throw err;
  }
}

// 사용자 설문 결과 만족도 반영 요청
export async function patchSatisfaction(payload: SatisfactionRequest) {
  try {
    await axios.patch("/survey/update", payload);
  } catch (err) {
    console.error("사용자 만족도 조사 결과 보내기 실패:", err);
    throw err;
  }
}

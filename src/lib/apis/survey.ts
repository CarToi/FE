import axios from "@/lib/axiosInstance";
import { RecommendationRequest, UpdateRequest } from "../type";

// 사용자 설문 결과 요청
export async function fetchRecommendation(payload: RecommendationRequest) {
  try {
    const res = await axios.post("/survey/recommendation", payload);
    return res.data;
  } catch (err) {
    console.error("추천 API 실패:", err);
    alert("추천 정보를 불러오는 데 실패했어요.");
  }
}

// 사용자 설문 결과 만족도 반영 요청
export async function updateSatisfactionScore(payload: UpdateRequest) {
  try {
    await axios.post("/survey/update", payload);
  } catch (err) {
    console.error("만족도 API 호출 실패:", err);
    alert("만족도 정보를 제출하는 데 실패했어요.");
  }
}

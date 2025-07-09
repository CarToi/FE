export interface RecommendationRequest {
  clientId: string;
  age: number;
  gender: "남자" | "여자";
  resident: "새만금" | "군산" | "김제" | "부안";
  city: "새만금" | "군산" | "김제" | "부안";
  want: string;
  mood: string;
}

export interface RecommendationResponse {
  title: string;
  position: string;
  category: "FESTIVAL" | "EVENT" | "TOUR" | "CULTURE";
  image: string | null;
  url: string;
  coordinate: {
    longitude: number;
    latitude: number;
  } | null;
}

export interface UpdateRequest {
  clientId: string;
  satisfactions: number[];
}

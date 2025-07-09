import { COORDINATE } from "@/constants/spaceData";

export function getDestination() {
  const onboarding = JSON.parse(
    localStorage.getItem("onboardingAnswers") ?? "[]"
  );
  const preferredRegion = onboarding[3];

  switch (preferredRegion) {
    case "군산":
      return COORDINATE.GUNSAN;
    case "김제":
      return COORDINATE.GIMJE;
    case "부안":
      return COORDINATE.BUAN;
    case "새만금":
    case "아직 없어요!": {
      const options = [COORDINATE.GUNSAN, COORDINATE.GIMJE, COORDINATE.BUAN];
      return options[Math.floor(Math.random() * options.length)];
    }
    default:
      return COORDINATE.SAEMANGEUM;
  }
}

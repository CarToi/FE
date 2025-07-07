export function createNewUser() {
  const time = new Date();
  const userId =
    "" +
    time.getFullYear() +
    time.getMonth() +
    time.getDate() +
    time.getHours() +
    time.getMinutes() +
    time.getSeconds() +
    time.getMilliseconds() +
    Math.floor(Math.random() * 1000);

  localStorage.setItem("userId", userId);
  localStorage.setItem("onboardingAnswers", JSON.stringify(Array(7).fill("")));
  localStorage.setItem("todayMoodAnswers", JSON.stringify(Array(2).fill("")));
}

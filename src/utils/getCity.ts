export function getCity(position: string) {
  if (position.indexOf("군산") > -1) {
    return "군산";
  }
  if (position.indexOf("김제") > -1) {
    return "김제";
  }
  if (position.indexOf("부안") > -1) {
    return "부안";
  }
  return null;
}

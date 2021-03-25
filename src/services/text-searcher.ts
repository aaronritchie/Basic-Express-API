import { SubStringResult } from "../models/join-reckon-response";

export const findIndicesOfSubStringsInText = (
  subTexts: string[],
  textToSearch: string
) => {
  const subStringResults: SubStringResult[] = [];
  subTexts.forEach((sub) => {
    const positions = getSubStringPositions(textToSearch, sub);
    const resultString =
      positions.length === 0 ? "<No Output>" : positions.join(", ");
    subStringResults.push({ subtext: sub, result: resultString });
  });
  return subStringResults;
};

const getSubStringPositions = (str, sub) => {
  str = str.toLowerCase();
  sub = sub.toLowerCase();
  const positions = [];
  if (sub.length > str.length) return positions;
  for (let i = 0; i < str.length - sub.length + 1; i++) {
    if (str[i] !== sub[0]) continue;
    for (let j = 1; j < sub.length; j++) {
      if (str[i + j] !== sub[j]) break;
      if (j === sub.length - 1) positions.push(i + 1);
    }
  }
  return positions;
};

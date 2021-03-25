import { DivisorInfo, RangeInfo } from "../models/join-reckon-response";

export const findDivisibleNumbersFromRangeAndDivisors = (
  rangeInfo: RangeInfo,
  divsorInfo: DivisorInfo[]
) => {
  let output: { [key: number]: string } = {};
  if (rangeInfo && divsorInfo) {
    for (var i = rangeInfo.lower; i < rangeInfo.upper + 1; i++) {
      output[i] = "";
      divsorInfo.forEach((div) => {
        if (i % div.divisor === 0) {
          output[i] += div.output;
        }
      });
    }
  }
  return output;
};

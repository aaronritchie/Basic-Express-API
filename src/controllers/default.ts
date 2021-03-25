import { getDivisorInfo, getRangeInfo } from "../clients/join-reckon";
import { findDivisibleNumbersFromRangeAndDivisors } from "../services/number-divisor";

export const handleDefault = async () => {
  const rangeInfo = await getRangeInfo();
  const divisorInfo = await getDivisorInfo();
  return findDivisibleNumbersFromRangeAndDivisors(rangeInfo, divisorInfo);
};

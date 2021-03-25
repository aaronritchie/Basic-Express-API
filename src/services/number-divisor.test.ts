import { findDivisibleNumbersFromRangeAndDivisors } from "./number-divisor";

describe("Given a range of 1 to 4 and a divisor of 2 (two) and 4 (four)", () => {
  it("findDivisibleNumbersFromRangeAndDivisors should return the correct array of divisor outputs", () => {
    let rangeInfo = { lower: 1, upper: 4 };
    let divisorInfo = [
      { divisor: 2, output: "two" },
      { divisor: 4, output: "four" },
    ];
    const result = findDivisibleNumbersFromRangeAndDivisors(
      rangeInfo,
      divisorInfo
    );
    const expected = { 1: "", 2: "two", 3: "", 4: "twofour" };
    expect(result).toEqual(expected);
  });
});
describe("Given a range of 4 to 4 and a divisor of 2 (two) and 4 (four)", () => {
  it("findDivisibleNumbersFromRangeAndDivisors should return the correct array of divisor outputs", () => {
    let rangeInfo = { lower: 4, upper: 4 };
    let divisorInfo = [
      { divisor: 2, output: "two" },
      { divisor: 4, output: "four" },
    ];
    const result = findDivisibleNumbersFromRangeAndDivisors(
      rangeInfo,
      divisorInfo
    );
    const expected = { 4: "twofour" };
    expect(result).toEqual(expected);
  });
});

describe("Given a negative range", () => {
  it("findDivisibleNumbersFromRangeAndDivisors should return an empty object", () => {
    let rangeInfo = { lower: 8, upper: 4 };
    let divisorInfo = [
      { divisor: 2, output: "two" },
      { divisor: 4, output: "four" },
    ];
    const result = findDivisibleNumbersFromRangeAndDivisors(
      rangeInfo,
      divisorInfo
    );
    const expected = {};
    expect(result).toEqual(expected);
  });
});

describe("Given a range from 1 to 4 and no divisors", () => {
  it("findDivisibleNumbersFromRangeAndDivisors should return an array with no output strings", () => {
    let rangeInfo = { lower: 1, upper: 4 };
    let divisorInfo = [];
    const result = findDivisibleNumbersFromRangeAndDivisors(
      rangeInfo,
      divisorInfo
    );
    const expected = { 1: "", 2: "", 3: "", 4: "" };
    expect(result).toEqual(expected);
  });
});

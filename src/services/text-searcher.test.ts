import { findIndicesOfSubStringsInText } from "./text-searcher";
import { SubStringResult } from "../models/join-reckon-response";

describe("Given text and substrings", () => {
  it("Then findIndicesOfSubTextsInText should return the correct substring results", () => {
    let text = "Test string With Some Capital Letters and . !~ symbols";
    let subStrings = ["test", "TEST", "ErS", "sT"];
    const result = findIndicesOfSubStringsInText(subStrings, text);
    const expected: SubStringResult[] = [
      { subtext: "test", result: "1" },
      { subtext: "TEST", result: "1" },
      { subtext: "ErS", result: "35" },
      { subtext: "sT", result: "3, 6" },
    ];
    expect(result).toEqual(expected);
  });
});

describe("Given text but no substrings", () => {
  it("Then findIndicesOfSubTextsInText should return an empty array", () => {
    let text = "Test string With Some Capital Letters and . !~ symbols";
    let subStrings = [];
    const result = findIndicesOfSubStringsInText(subStrings, text);
    const expected: SubStringResult[] = [];
    expect(result).toEqual(expected);
  });
});

describe("Given substrings but no text", () => {
  it("Then findIndicesOfSubTextsInText should return a result of `<No Output>` for every subtext", () => {
    let text = "";
    let subStrings = ["test", "TEST", "ErS", "sT"];
    const result = findIndicesOfSubStringsInText(subStrings, text);
    const expected: SubStringResult[] = [
      { subtext: "test", result: "<No Output>" },
      { subtext: "TEST", result: "<No Output>" },
      { subtext: "ErS", result: "<No Output>" },
      { subtext: "sT", result: "<No Output>" },
    ];
    expect(result).toEqual(expected);
  });
});

import axios from "axios";
import {
  getDivisorInfo,
  getRangeInfo,
  getTextToSearch,
  getSubTexts,
  getReckonEndpoint,
  postReckonEndpoint,
} from "./join-reckon";

jest.mock("axios");

describe("Given working endpoints", () => {
  it("When calling getDivisorInfo it returns the divisorInfo", async () => {
    const data = { outputDetails: [{ divisor: "", output: "" }] };

    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: data }));
    await expect(getDivisorInfo()).resolves.toEqual(data.outputDetails);
  });

  it("When calling getRangeInfo it returns the divisorInfo", async () => {
    const data = { lower: 1, upper: 100 };

    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: data }));
    await expect(getRangeInfo()).resolves.toEqual(data);
  });

  it("When calling getTextToSearch it returns the divisorInfo", async () => {
    const data = { text: "text" };

    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: data }));
    await expect(getTextToSearch()).resolves.toEqual(data.text);
  });

  it("When calling getSubTexts it returns the divisorInfo", async () => {
    const data = { subTexts: ["subtext"] };

    axios.get = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ data: data }));
    await expect(getSubTexts()).resolves.toEqual(data.subTexts);
  });
});

describe("Given a path and base url", () => {
  it("Then getReckonEndpoint should call the correct endpoint ", async () => {
    const path = "path";
    axios.get = jest.fn();

    await expect(getReckonEndpoint(path));
    expect(axios.get).toHaveBeenCalledWith(`https://join.reckon.com/${path}`);
  });

  it("Then postReckonEndpoint should call the correct endpoint with the supplied data", async () => {
    const path = "path";
    const data = "data";
    axios.post = jest.fn();

    await expect(postReckonEndpoint(path, data));
    expect(axios.post).toHaveBeenCalledWith(
      `https://join.reckon.com/${path}`,
      data
    );
  });
});

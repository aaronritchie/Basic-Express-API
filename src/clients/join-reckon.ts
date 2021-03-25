import {
  DivisorInfo,
  RangeInfo,
  SubmitSubStringSearchResults,
} from "../models/join-reckon-response";

const axios = require("axios");
const axiosRetry = require("axios-retry");

const baseUrl = "https://join.reckon.com/";

axiosRetry(axios, {
  retries: 100, // number of retries
  retryDelay: (retryCount) => {
    console.log(`Retrying  (${retryCount}/50 max)`);
    return retryCount * 200; // time interval between retries
  },
  retryCondition: (error) => {
    return error.response.status >= 500;
  },
});

export const getReckonEndpoint = async (path: string) => {
  const url = baseUrl + path;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const postReckonEndpoint = async (path: string, data: any) => {
  const url = baseUrl + path;
  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getDivisorInfo = async () => {
  return (await getReckonEndpoint("test1/divisorInfo"))
    .outputDetails as DivisorInfo[];
};

export const getRangeInfo = async () => {
  return (await getReckonEndpoint("test1/rangeInfo")) as RangeInfo;
};

export const getTextToSearch = async () => {
  return (await getReckonEndpoint("test2/textToSearch")).text as string;
};

export const getSubTexts = async () => {
  return (await getReckonEndpoint("test2/subTexts")).subTexts as string[];
};

export const submitSubstringResults = async (
  results: SubmitSubStringSearchResults
) => {
  return await postReckonEndpoint("test2/submitResults", results);
};

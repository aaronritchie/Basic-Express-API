import {
  getTextToSearch,
  getSubTexts,
  submitSubstringResults,
} from "../clients/join-reckon";
import { findIndicesOfSubStringsInText } from "../services/text-searcher";
import { SubmitSubStringSearchResults } from "../models/join-reckon-response";

export const handleTestTwo = async () => {
  const textToSearch = await getTextToSearch();
  const subTexts = await getSubTexts();
  const subStringResults = findIndicesOfSubStringsInText(
    subTexts,
    textToSearch
  );

  const submitResultsData: SubmitSubStringSearchResults = {
    candidate: "Aaron Ritchie",
    results: subStringResults,
  };
  return await submitSubstringResults(submitResultsData);
};

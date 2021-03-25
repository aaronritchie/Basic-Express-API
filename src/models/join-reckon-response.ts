export type DivisorInfo = {
  divisor: number;
  output: string;
};

export type RangeInfo = {
  lower: number;
  upper: number;
};

export type SubmitSubStringSearchResults = {
  candidate: string;
  results: SubStringResult[];
};

export type SubStringResult = {
  subtext: string;
  result: string;
};

import output from "../../../public/data.json";

const filteredData = output
  .map((data): any => data?.PARSED_MANUAL_TAGS?.["PROJECT STEP"]).flat() 
  .filter(value => value !== null) ; 

export const uniqueFilteredData = [...new Set(filteredData)];


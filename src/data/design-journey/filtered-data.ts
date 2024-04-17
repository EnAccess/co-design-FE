import output from "../../../public/data.json";

const filteredData = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.["PROJECT STEP"]).flat() 
  .filter(data => data !== null)  ; 

export const uniqueFilteredData = [...new Set(filteredData)];





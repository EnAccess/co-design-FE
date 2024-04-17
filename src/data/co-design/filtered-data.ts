import output from "../../../public/data.json";

const filteredData = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.["PROJECT STEP"]).flat() 
  .filter(value => value !== null)  ; 

export const uniqueFilteredData = [...new Set(filteredData)];




const designKeys = (element: any) => {
  return output
    .filter(
      (entry) =>
        entry?.PARSED_MANUAL_TAGS["PROJECT STEP"]?.includes(element)
    )
    .map((entry) => entry.Key);
}
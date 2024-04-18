import output from "../../../public/data.json";
const dataSources = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.ACCESS)
  .flat()
  .filter((source) => source && !source.includes("Open Access"))
  .filter((source) => source) as string[];

export const uniqueDataSources = Array.from(new Set(dataSources));

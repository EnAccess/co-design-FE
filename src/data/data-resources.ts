import output from "../../public/data.json";

const dataResources = output
  .map((entry) => entry?.PARSED_MANUAL_TAGS?.ACCESS)
  .flat()
  .filter((resource) => resource && !resource.includes("Open Access"))
  .filter((data) => data) as string[];

export const filteredResources = Array.from(new Set(dataResources));

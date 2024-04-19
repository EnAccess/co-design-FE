import output from "../../../public/data.json";

const rawLevels = output
  .map((data) => data?.PARSED_MANUAL_TAGS["CO_DESIGN_LEVEL"])
  .flat()
  .filter((theme) => theme)
  .sort() as string[];

export const levels = Array.from(new Set(rawLevels));

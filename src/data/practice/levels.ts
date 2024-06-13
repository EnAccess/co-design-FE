import output from "@/data/zotero";

const rawLevels = output
  .map((data) => data?.PARSED_MANUAL_TAGS["CO-DESIGN LEVEL"])
  .flat()
  .filter((theme) => theme)
  .sort() as string[];

export const levels = Array.from(new Set(rawLevels));

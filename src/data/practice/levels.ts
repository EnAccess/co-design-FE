import { generateDataJson } from "../../utils/generate-output-json";

export const getLevels = async () => {
  const output = await generateDataJson();
  const rawLevels = output
    .map((data: any) => data?.PARSED_MANUAL_TAGS["CO_DESIGN_LEVEL"])
    .flat()
    .filter((theme: any) => theme)
    .sort() as string[];

  return Array.from(new Set(rawLevels));
};

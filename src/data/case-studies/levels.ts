import { generateDataJson } from "@/utils/generate-output-json";

export async function getLevels() {
  const output = await generateDataJson();
  const rawLevels = output
    .map((data: any) => data?.PARSED_MANUAL_TAGS["CASE STUDY LEVEL"])
    .flat()
    .filter((theme: any) => theme) as string[];

  return Array.from(new Set(rawLevels));
}

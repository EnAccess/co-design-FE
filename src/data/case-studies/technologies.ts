import { generateDataJson } from "@/utils/generate-output-json";

export async function getTechnlogies() {
  const output = await generateDataJson();
  const rawTechnlogies = output
    .map((data: any) => data?.PARSED_MANUAL_TAGS["CASE STUDY TECH"])
    .flat()
    .filter((theme: any) => theme) as string[];

  return Array.from(new Set(rawTechnlogies));
}

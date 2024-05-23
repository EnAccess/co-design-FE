import { Block } from "@/types/interfaces";
import { toolsData } from "./tools-data";
import { generateDataJson } from "@/utils/generate-output-json";

export async function getTools() {
  const output = await generateDataJson();
  const rawApproaches = output
    .map((data: any) => data?.PARSED_MANUAL_TAGS?.TOOLS)
    .flat()
    .filter((approach: any ) => approach) as string[];

  const approaches = Array.from(new Set(rawApproaches)).map(
    (approach: string) => {
      const data = toolsData[approach.toUpperCase()];
      const entries = output.filter((entry:any) =>
        entry?.PARSED_MANUAL_TAGS?.TOOLS?.includes(approach)
      );
      return {
        title: approach,
        description: data?.description,
        entries,
      };
    }
  ) as Block[];
    return approaches;
}

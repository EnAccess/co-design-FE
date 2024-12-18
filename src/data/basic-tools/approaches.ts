import { Block } from "@/types/interfaces";
import output from "@/data/zotero";
import { toolsData } from "./tools-data";

const rawApproaches = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.TOOLS)
  .flat()
  .filter((approach) => approach) as string[];

export const approaches = Array.from(new Set(rawApproaches)).map(
  (approach: string) => {
    const data = toolsData[approach.toUpperCase()];
    const entries = output
      .filter((entry) => entry?.PARSED_MANUAL_TAGS?.TOOLS?.includes(approach))
      .map((entry) => ({
        ...entry,
        hasDefaultBackground: true,
      }));
    return {
      title: approach,
      description: data?.description,
      entries,
    };
  }
) as unknown as Block[];

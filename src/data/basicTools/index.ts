import output from "../../../public/data.json";
import { toolsData } from "./toolsData";

const rawApproaches = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.TOOLS)
  .flat()
  .filter((approach) => approach) as string[];

export const approaches = Array.from(new Set(rawApproaches)).map(
  (approach: string) => {
    const data = toolsData[approach];
    const entries = output.filter((entry) =>
      entry?.PARSED_MANUAL_TAGS?.TOOLS?.includes(approach)
    );
    return {
      title: approach,
      description: data?.description || null,
      entries,
    };
  }
);

const rawBasicTools = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.["BASIC TOOLS"])
  .flat()

export const basicTools = Array.from(new Set(rawBasicTools)).map(
  (tools: any) => {
    const data = toolsData[tools];
    const entries = output.filter((entry) =>
      entry?.PARSED_MANUAL_TAGS["BASIC TOOLS"]?.includes(tools)
    );

    return {
      title: tools,
      description: data?.description,
      entries,
    };
  }
);

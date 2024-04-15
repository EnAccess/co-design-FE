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
      description: data?.description,
      entries,
    };
  }
);


const rawBasicTools = (data: any) => {
  const tool = Object.keys(data).find((currentKey) => currentKey === "BASIC TOOLS");
  if (tool) {
     return {
       title: tool,
       description: data[tool].description,
     };
  }
 };

 export function basicTools() {
   const data = rawBasicTools(toolsData);
  const entries = output.filter(
    (entry) =>
      entry?.PARSED_MANUAL_TAGS && "BASIC TOOLS" in entry.PARSED_MANUAL_TAGS
  );

  return [
    {
      title: data?.title,
      description: data?.description,
      entries,
    },
  ];
};

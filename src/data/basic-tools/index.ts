import { Block, Entry } from "@/types/interfaces";
import { toolsData } from "./tools-data";
import { generateDataJson } from "@/utils/generate-output-json";
import { getTool } from "./approaches";

const toolData = toolsData["BASIC TOOLS"];

export async function getGroup() {
  const output = await generateDataJson();
  const approaches =  await getTool();
  const entries = output.filter(
    (entry:any) => entry?.PARSED_MANUAL_TAGS && "BASIC TOOLS" in entry.PARSED_MANUAL_TAGS
  ) as unknown as Entry[];
  
  const groups: Block[] = [
    {
      title: "Basic Tools",
      description: toolData?.description,
      entries,
    },
    ...approaches,
  ];
  
  return groups;
} 

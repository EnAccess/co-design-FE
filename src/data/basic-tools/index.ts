import output from "@/data/zotero";
import { Block, Entry } from "@/types/interfaces";
import { approaches } from "./approaches";
import { toolsData } from "./tools-data";
import { isBasicTool } from "@/utils/helpers";

const toolData = toolsData["BASIC TOOLS"];

const entries = output
  .filter((entry) => isBasicTool(entry))
  .map((entry) => ({
    ...entry,
    isBasicTool: true,
  })) as unknown as Entry[];

const groups: Block[] = [
  {
    title: "Basic Tools",
    description: toolData?.description,
    entries,
  },
  ...approaches,
];

export default groups;

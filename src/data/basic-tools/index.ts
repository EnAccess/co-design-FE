import { Block, Entry, Group } from "@/types/interfaces";
import output from "../../../public/data.json";
import { approaches } from "./approaches";
import { toolsData } from "./tools-data";

const toolData = toolsData["BASIC TOOLS"];

const entries = output.filter(
  (entry) => entry?.PARSED_MANUAL_TAGS && "BASIC TOOLS" in entry.PARSED_MANUAL_TAGS
) as unknown as Entry[];

const groups: Block[] = [
  {
    title: "Basic Tools",
    description: toolData?.description,
    entries,
  },
  ...approaches,
];

export default groups;

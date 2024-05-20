import { Group } from "@/types/interfaces";
import output from "../../../public/data.json";
import { sortByLevel } from "@/utils/helpers";

const caseStudies = sortByLevel(
  output.filter((data) => data?.PARSED_MANUAL_TAGS["CASE STUDY GROUP"])
);
const toolKits = sortByLevel(
  output.filter((data) => data?.PARSED_MANUAL_TAGS["CORE_TOOLKIT"])
);

const groups: Group[] = [
  {
    title: "",
    blocks: [
      {
        title: "CORE Toolkits",
        entries: toolKits,
      },
    ],
  },
  {
    title: "",
    blocks: [
      {
        title: "Case Studies",
        entries: caseStudies,
      },
    ],
  },
] as unknown as Group[];

export default groups;

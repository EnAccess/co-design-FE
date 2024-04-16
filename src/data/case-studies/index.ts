import { Group } from "@/types/interfaces";
import output from "../../../public/data.json";
import { technologies } from "./technologies";
import { levels } from "./levels";

const caseStudies = output.filter(
  (data) => data?.PARSED_MANUAL_TAGS["CASE STUDY GROUP"]
);
const toolKits = output.filter(
  (data) => data?.PARSED_MANUAL_TAGS["CORE_TOOLKIT"]
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

const getEntryKeys = (highlightedElement: any) =>
  output
    .filter(
      (entry) =>
        entry?.PARSED_MANUAL_TAGS?.["CASE STUDY LEVEL"]?.includes(
          highlightedElement
        ) ||
        entry?.PARSED_MANUAL_TAGS?.["CASE STUDY TECH"]?.includes(
          highlightedElement
        )
    )
    .map((entry) => entry.Key);

const Highlights = [
  {
    title: "Highlight Case Study Details",
    blocks: [
      {
        title: "Case Study Implementation Level",
        style: "bg-black-900 text-white",
        entries: levels,
      },
      {
        title: "Case Study Technology",
        style: "bg-white text-black",
        entries: technologies,
      },
    ],
  },
];
export { getEntryKeys, groups, Highlights };

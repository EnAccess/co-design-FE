import { Group } from "@/types/interfaces";
import { generateDataJson } from "@/utils/generate-output-json";

export async function getTools() {
  const output = await generateDataJson();
  const caseStudies = output.filter(
    (data: any) => data?.PARSED_MANUAL_TAGS["CASE STUDY GROUP"]
  );
  const toolKits = output.filter(
    (data: any) => data?.PARSED_MANUAL_TAGS["CORE_TOOLKIT"]
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

  return groups;
}

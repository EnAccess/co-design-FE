import { getLevels } from "./levels";
import { getTechnlogies } from "./technologies";

export async function getHighlights() {
  const Highlights = [
    {
      title: "Highlight Case Study Details",
      blocks: [
        {
          title: "Case Study Implementation Level",
          type: "main",
          attribute: "CASE STUDY LEVEL",
          entries: await getLevels(),
        },
        {
          title: "Case Study Technology",
          type: "default",
          attribute: "CASE STUDY TECH",
          entries: await getTechnlogies(),
        },
      ],
    },
  ];

  return Highlights;
}

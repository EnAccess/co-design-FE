import { Entries} from "../types/interfaces";
import Data from "../../public/output.json";

export const basicToolsEntries = Data.filter((entry) =>
  entry.Manual_Tags.includes("BASIC TOOLS")
) as Entries;

export const technicalAproachEntries = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: Technical Approaches")
  );
}).filter((entry) => {
  return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
}) as Entries;

export const multidisciplinaryByPracticeEntries = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
  );
})
  .filter((entry) => {
    return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
  })
  .splice(0, 5) as Entries;
  
export const multidisciplinaryByTheoryEntries = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
  );
}).splice(6) as Entries;

export const participatoryByPracticeEntries = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
  );
}).splice(0, 4) as Entries;

export const participatoryByTheoryEntries = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
  );
})
  .filter((entry) => {
    return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
  })
  .splice(5) as Entries;

export const behaviorByPracticeApproach = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: Behaviour Change Approaches")
  );
}).splice(0, 5) as Entries;

export const behaviorByTheoryApproach = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: Behaviour Change Approaches")
  );
}).splice(5) as Entries;

export const humanDesignByPracticeApproach = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
  );
}).splice(0, 3) as Entries;

export const humanDesignByTheoryApproach = Data.filter((entry) => {
  return (
    entry.Manual_Tags &&
    entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
  );
}).splice(3) as Entries;

import { Entry } from "../../types/interfaces";
import Data from "../../../public/output.json";


export const basicToolsEntries = Data.filter((entry) =>
entry.Manual_Tags.includes("BASIC TOOLS")
) as Entry[];

export const technicalAproachEntries = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: Technical Approaches")
);
}).filter((entry) => {
return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
}) as Entry[];

export const multidisciplinaryByPracticeEntries = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
);
})
.filter((entry) => {
  return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
})
.splice(0, 5) as Entry[];
export const multidisciplinaryByTheoryEntries = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
);
}).splice(6) as Entry[];

export const participatoryApproachEntries = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
);
}).splice(0, 4) as Entry[];

export const participatoryApproachEntries1 = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
);
})
.filter((entry) => {
  return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
})
.splice(5) as Entry[];

export const behaviorByPracticeApproach = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: Behaviour Change Approaches")
);
}).splice(0, 5) as Entry[];

export const behaviorByTheoryApproach = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: Behaviour Change Approaches")
);
}).splice(5) as Entry[];

export const humanDesignByPracticeApproach = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
);
}).splice(0, 3) as Entry[];

export const humanDesignByTheoryApproach = Data.filter((entry) => {
return (
  entry.Manual_Tags &&
  entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
);
}).splice(3) as Entry[];

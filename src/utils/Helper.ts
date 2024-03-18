import { Entries, Entry } from "@/types/interfaces";

interface Accumulator {
  level1: Entries;
  level2: Entries;
  level3: Entries;
}

export const categorizeByCoDesignLevel = (entries: Entries) => {
  return entries.reduce(
    (acc: Accumulator, entry: Entry) => {
      const coDesignLevel = entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
      switch (coDesignLevel) {
        case "1":
          acc.level1.unshift(entry);
          break;
        case "2":
          acc.level2.unshift(entry);
          break;
        case "3":
          acc.level3.unshift(entry);
          break;
        default:
          console.error(`Unknown CO_DESIGN_LEVEL: ${coDesignLevel}`);
      }
      return acc;
    },
    { level1: [], level2: [], level3: [] }
  );
};

export function getColorByAccess(accessType: string) {
  switch (accessType) {
    case "Institutional Access":
      return "#FFFF33"; // Yellow
    case "Open Source":
      return "#33FF33"; // green
    case "Paid Service":
      return "#33FF33"; // Red
    default:
      return "transparent";
  }
}

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
          acc.level1.push(entry);
          break;
        case "2":
          acc.level2.push(entry);
          break;
        case "3":
          acc.level3.push(entry);
          break;
        default:
          console.log(`Unknown CO_DESIGN_LEVEL: ${coDesignLevel}`);
      }
      return acc;
    },
    { level1: [], level2: [], level3: [] }
  );
};

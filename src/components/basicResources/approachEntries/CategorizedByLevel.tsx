import { Entries, Entry } from '../../../types/interfaces';

interface Accumulator {
level2: Entries
level3: Entries
}
export const CategorizedByLevel = (entries: Entries) => {
  return entries.reduce(
    (acc: Accumulator, entry: Entry) => {
        const designLevel = entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
        switch (designLevel) {
          case '1':
            acc.level2.push(entry);
            break;
          case '2':
            acc.level3.push(entry);
            break;
          default:
            console.log(`Unknown CO_DESIGN_LEVEL: ${designLevel}`);
        }
        return acc;
      },
      { level2: [], level3: [] }
    );
  };


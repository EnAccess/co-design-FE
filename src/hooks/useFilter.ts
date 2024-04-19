// import { useFilterContext } from "@/context/filter";
// import { Entries } from "@/types/interfaces";
// import { useCallback, useEffect, useState } from "react";

// export const useSelectedEntries = (entries: Entries) => {
//   const [selectedEntries, setSelectedEntries] = useState<Entries>(entries);

//   const { tag } = useFilterContext();

//   const onSelect = useCallback(() => {
//     if (!selectedLevels || selectedLevels.length === 0) return;
//     setSelectedEntries(
//       entries.filter((entry) => {
//         const parsedManualTags = entry?.PARSED_MANUAL_TAGS;
//         const coDesignLevel = parsedManualTags?.tag.name?.[0];
//         return coDesignLevel && !selectedLevels.includes(coDesignLevel);
//       })
//     );
//   }, [selectedLevels, entries]);

//   useEffect(() => {
//     onSelect();
//   }, [selectedLevels]);

//   return selectedEntries;
// };

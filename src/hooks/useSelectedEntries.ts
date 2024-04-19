import { useAppContext } from "@/context/provider";
import { Entries } from "@/types/interfaces";
import { useCallback, useEffect, useState } from "react";

export const useSelectedEntries = (entries: Entries) => {
  const [selectedEntries, setSelectedEntries] = useState<Entries>(entries);

  const { selectedLevels } = useAppContext();

  useEffect(() => {
    const filteredEntries = entries.filter((entry) => {
      const parsedManualTags = entry?.PARSED_MANUAL_TAGS;
      const coDesignLevel = parsedManualTags?.CO_DESIGN_LEVEL?.[0];
      return coDesignLevel && !selectedLevels.includes(coDesignLevel);
    });
    setSelectedEntries(filteredEntries);
  }, [entries, selectedLevels]);

  return selectedEntries;
};

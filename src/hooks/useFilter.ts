import { useFilterContext } from "@/context/filter";
import { Entries } from "@/types/interfaces";
import { useCallback, useEffect, useState } from "react";

export const useSelectedEntries = (entries: Entries) => {
  const [selectedEntries, setSelectedEntries] = useState<Entries>(entries);
  const { selected } = useFilterContext();

  const onSelect = useCallback(() => {
    if (!selected || selected.length === 0) {
      setSelectedEntries(entries);
      return;
    }

    setSelectedEntries(
      entries.filter((entry) =>
        selected.every((select: any) => {
          const parsedManualTags = entry?.PARSED_MANUAL_TAGS as any;
          const coDesignLevel = parsedManualTags?.[select.field];
          if (Array.isArray(coDesignLevel))
            return !coDesignLevel.includes(select.value);
          return coDesignLevel !== select.value;
        })
      )
    );
  }, [selected, entries]);

  useEffect(() => {
    onSelect();
  }, [selected]);

  return selectedEntries;
};

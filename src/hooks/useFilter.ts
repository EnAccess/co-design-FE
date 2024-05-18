import { useFilterContext } from "@/context/filter";
import { Entries } from "@/types/interfaces";
import { useCallback, useEffect, useState } from "react";

export const useFilter = (entries: any) => {
  const [filteredEntries, setFilteredEntries] = useState<any>(entries);
  const { filterValues } = useFilterContext();

  const onSelect = useCallback(() => {
    if (!filterValues || filterValues.length === 0) {
      setFilteredEntries(entries);
      return;
    }
    setFilteredEntries(
      entries.filter((entry: any) =>
        filterValues.every((select: any) => {
          const parsedManualTags = entry?.data?.PARSED_MANUAL_TAGS as any;
          const coDesignLevel = parsedManualTags?.[select.field];
          if (Array.isArray(coDesignLevel))
            return !coDesignLevel.includes(select.value);
          return coDesignLevel !== select.value;
        })
      )
    );
  }, [filterValues, entries]);

  useEffect(() => {
    onSelect();
  }, [filterValues]);

  return filteredEntries;
};

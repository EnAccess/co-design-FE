import { createContext, useCallback, useContext, useState } from "react";

type FilterValue = {
  field: string;
  value: string | number;
};
export type FilterContextType = {
  addFilter: (field: string, value: string | number) => void;
  filterValues: FilterValue[] | null;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filterValues, setFilterValues] = useState<FilterValue[] | null>(null);

  const addFilter = useCallback(
    (field: string, value: string | number) => {
      setFilterValues((prev: any) => {
        if (!prev || !Array.isArray(prev)) {
          prev = [];
        }
        const hasTag = prev.some((tag: any) => tag.value === value);
        return hasTag
          ? prev.filter((tag: any) => tag.value !== value)
          : [...prev, { field, value }];
      });
    },
    [filterValues]
  );

  return (
    <FilterContext.Provider value={{ addFilter, filterValues }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilterContext must be used within an ContextProvider");
  }
  return context;
}

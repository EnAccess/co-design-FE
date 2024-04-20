import { createContext, useCallback, useContext, useState } from "react";

export type FilterContextType = {
  field: string;
  value: string | number;
  setTag: (field: string, value: string | number) => void;
  selected: any;
};
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [field, setField] = useState<string>("");
  const [value, setValue] = useState<string | number>("");
  const [selected, setSelected] = useState<any>([]);

  const setTag = useCallback(
    (field: string, value: string | number) => {
      setField(field);
      setValue(value);
      setSelected((prev: any[]) => {
        if (!prev || !Array.isArray(prev)) {
          prev = [];
        }
        const hasTag = prev.some((tag: any) => tag.value === value);
        return hasTag
          ? prev.filter((tag: any) => tag.value !== value)
          : [...prev, { field, value }];
      });
    },
    [field, value]
  );
  console.log("first", selected);

  return (
    <FilterContext.Provider value={{ field, value, setTag, selected }}>
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

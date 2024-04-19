import { createContext, useCallback, useContext, useState } from "react";

export type FilterContextType = {
  field: string;
  value: string | number;
  setTag: (field: string, value: string | number) => void;
};
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  //  const[tag,setTag]=useState(null)
  const [field, setField] = useState<string>("");
  const [value, setValue] = useState<string | number>("");

  const setTag = useCallback(
    (field: string, value: string | number) => {
      setField(field);
      setValue(value);
    },
    [field, value]
  );

  console.log("first", field, value);
  return (
    <FilterContext.Provider value={{ field, value, setTag }}>
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

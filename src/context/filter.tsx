import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Tag {
  name: string;
  value: string | number;
}
export type FilterContextType = {
  tags: Tag | null;
  setTag: Dispatch<SetStateAction<Tag | null>>;
};
const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [tags, setTag] = useState<Tag | null>(null);
  return (
    <FilterContext.Provider value={{ tags, setTag }}>
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

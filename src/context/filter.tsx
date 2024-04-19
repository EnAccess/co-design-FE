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
export type ContextType = {
  tag: Tag[] | null;
  setTag: Dispatch<SetStateAction<Tag[] | null>>;
};
const FilterContext = createContext<ContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [tag, setTag] = useState<Tag[] | null>(null);
  return (
    <FilterContext.Provider value={{ tag, setTag }}>
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

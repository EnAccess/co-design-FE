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
  highlightedTag: Tag | null;
  setHighlightedTag: Dispatch<SetStateAction<Tag | null>>;
  selectedLevels: string[];
  setSelectedLevels: Dispatch<SetStateAction<string[]>>;
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [highlightedTag, setHighlightedTag] = useState<Tag | null>(null);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  console.log("first", selectedLevels);
  return (
    <AppContext.Provider
      value={{
        highlightedTag,
        setHighlightedTag,
        selectedLevels,
        setSelectedLevels,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an ContextProvider");
  }
  return context;
}

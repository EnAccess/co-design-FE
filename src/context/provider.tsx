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
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [highlightedTag, setHighlightedTag] = useState<Tag | null>(null);
  return (
    <AppContext.Provider value={{ highlightedTag, setHighlightedTag }}>
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

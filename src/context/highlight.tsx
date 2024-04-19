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
  tag: Tag | null;
  setTag: Dispatch<SetStateAction<Tag | null>>;
};
const HighlightContext = createContext<ContextType | undefined>(undefined);

export function HighlightProvider({ children }: { children: React.ReactNode }) {
  const [tag, setTag] = useState<Tag | null>(null);
  return (
    <HighlightContext.Provider value={{ tag, setTag }}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHightlightContext() {
  const context = useContext(HighlightContext);
  if (context === undefined) {
    throw new Error(
      "useHightlightContext must be used within an ContextProvider"
    );
  }
  return context;
}

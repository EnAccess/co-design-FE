import { createContext, useContext, useState } from "react";

interface Tags {
  name: string;
  value: string | number;
}
export type ContextType = {
  highlightedTag: any;
  setHighlightedTag: any;
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [highlightedTag, setHighlightedTag] = useState<Tags | null>(null);
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

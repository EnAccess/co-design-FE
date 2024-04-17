import { createContext, useContext, useState } from "react";

interface Node {
  attribute: string;
  value: string | number;
}
export type ContextType = {
  highlightedNodes: any;
  setHighlightedNodes: any;
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [highlightedNodes, setHighlightedNodes] = useState(null);
  return (
    <AppContext.Provider value={{ highlightedNodes, setHighlightedNodes }}>
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

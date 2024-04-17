import { createContext, useContext, useState } from "react";

export type ContextType = {
  highlightedKeys: string[];
  setHighlightedKeys: any;
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [highlightedKeys, setHighlightedKeys] = useState([]);
  return (
    <AppContext.Provider value={{ highlightedKeys, setHighlightedKeys }}>
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

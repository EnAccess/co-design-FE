import { createContext, useContext, useState } from "react";

export type ContextType = {
  entryKeys: string[];
  setEntryKeys: any;
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [entryKeys, setEntryKeys] = useState([]);
  return (
    <AppContext.Provider value={{ entryKeys, setEntryKeys }}>
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

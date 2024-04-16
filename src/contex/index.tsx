import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type ContextType = {
  level: string[];
  setLevel: any;
};
const AppContext = createContext<ContextType | undefined>(undefined);

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [level, setLevel] = useState([]);
  return (
    <AppContext.Provider value={{ level, setLevel }}>
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

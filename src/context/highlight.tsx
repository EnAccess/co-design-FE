import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export type HighlightContextType = {
  field: string;
  value: string | number;
  setTag: (field: string, value: string | number) => void;
};
const HighlightContext = createContext<HighlightContextType | undefined>(undefined);

export function HighlightProvider({ children }: { children: React.ReactNode }) {
  const [field, setField] = useState<string>("");
  const [value, setValue] = useState<string | number>("");

  const setTag = useCallback((field: string, value: string | number) => {
    setField(field);
    setValue(value);
  }, [field, value]);


  return (
    <HighlightContext.Provider value={{ field, value, setTag }}>
      {children}
    </HighlightContext.Provider>
  );
}

export function useHighlightContext() {
  const context = useContext(HighlightContext);
  if (context === undefined) {
    throw new Error("useHighlightContext must be used within an ContextProvider");
  }
  return context;
}

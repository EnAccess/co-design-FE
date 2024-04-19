import { useHighlightContext } from "@/context/highlight";
import { Entry } from "@/types/interfaces";
import { hasTag } from "@/utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHighlight = (entry: Entry) => {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);
  const { field, value } = useHighlightContext();

  const onHighlight = useCallback(() => {
    if (!field) return;
    const isTag = hasTag(entry, field, value);

    if (!isTag) return;
    setHighlighted(true);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setHighlighted(false);
    }, 2000);
  }, [field, value]);

  useEffect(() => {
    onHighlight();
  }, [onHighlight]);

  return highlighted;
};

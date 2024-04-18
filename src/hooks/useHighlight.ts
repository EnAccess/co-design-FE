import { useAppContext } from "@/context/provider";
import { Entry } from "@/types/interfaces";
import { hasTag } from "@/utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHighlight = (entry: Entry) => {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);
  const { highlightedTag } = useAppContext();

  const onHighlight = useCallback(() => {
    if (!highlightedTag) return;
    const isTag = hasTag(entry, highlightedTag.name, highlightedTag.value);

    if (!isTag) return;
    setHighlighted(true);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setHighlighted(false);
    }, 2000);
  }, [highlightedTag]);

  useEffect(() => {
    onHighlight();
  }, [highlightedTag]);

  return highlighted;
};

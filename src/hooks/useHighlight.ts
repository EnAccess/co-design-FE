import { useAppContext } from "@/context/app";
import { Entry } from "@/types/interfaces";
import { checkHighlightedNodes } from "@/utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHighlight = (entry: Entry) => {
  const [highlighted, setHighlighted] = useState(false);

  const timerRef = useRef<number | null>(null);
  const { highlightedTag } = useAppContext();

  const onHighlight = useCallback(() => {
    if (!highlightedTag) return;
    const isHighlightedNode = checkHighlightedNodes(
      entry,
      highlightedTag.attribute,
      highlightedTag.value
    );
    if (!isHighlightedNode) return;
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

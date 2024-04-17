import { useAppContext } from "../context/app";
import { Entry } from "../types/interfaces";
import { checkHighlightedNodes } from "../utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHighlight = (entry: Entry) => {
  const [highlighted, setHighlighted] = useState(false);

  const timerRef = useRef<number | null>(null);
  const { highlightedNodes } = useAppContext();

  const onHighlight = useCallback(() => {
    if (highlightedNodes) {
      const isHighlightedNode = checkHighlightedNodes(
        entry,
        highlightedNodes.attribute,
        highlightedNodes.value
      );
      if (isHighlightedNode) {
        setHighlighted(true);
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
          setHighlighted(false);
        }, 2000);
      }
    }
  }, [highlightedNodes]);

  useEffect(() => {
    onHighlight();
  }, [highlightedNodes]);

  return highlighted;
};

import { useHightlightContext } from "@/context/highlight";
import { Entry } from "@/types/interfaces";
import { hasTag } from "@/utils/helpers";
import { useCallback, useEffect, useRef, useState } from "react";

export const useHighlight = (entry: Entry) => {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  const timerRef = useRef<number | null>(null);
  const { tag } = useHightlightContext();

  const onHighlight = useCallback(() => {
    if (!tag) return;
    const isTag = hasTag(entry, tag.name, tag.value);

    if (!isTag) return;
    setHighlighted(true);

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setHighlighted(false);
    }, 2000);
  }, [tag]);

  useEffect(() => {
    onHighlight();
  }, [tag]);

  return highlighted;
};

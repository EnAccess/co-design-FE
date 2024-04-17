import { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import Star from "@/components/icons/Star";
import { getBgColorClassName, getColorByAccess } from "@/utils/helpers";
import Link from "next/link";
import { useAppContext } from "@/context";

export function NodeCard({ data }: any) {
  const [highlighted, setHighlighted] = useState(false);
  const { highlightedKeys } = useAppContext();
  const bgColor = getBgColorClassName(data);
  const dataAccess = data?.PARSED_MANUAL_TAGS?.ACCESS?.[0];
  const starColor = getColorByAccess(dataAccess);
  const summary = data.Notes?.replace(/<[^>]*>?/gm, "");
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (highlightedKeys.includes(data.Key)) {
      setHighlighted(true);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setHighlighted(false);
      }, 2000);
    }
  }, [data.Key, highlightedKeys]);

  return (
    <div className="group cursor-pointer">
      <Handle type="target" position={Position.Top} id={data.Key} />
      <Link href={data?.Url} target="_blank">
        <div
          className={`py-4 px-2 text-xs w-52 rounded-md border-solid border-2 hover:border-4 box-content hover:relative transition-colors duration-1000hover:border-purple-500 ${bgColor} ${
            highlighted && "border-4 border-[#7dcff5]"
          }`}
        >
          <div className="relative">
            <p className="z-10">{data.Title}</p>
            <p className="z-10">{data.Author}</p>

            {(dataAccess === "Institutional Access" ||
              dataAccess === "Paid Service" ||
              dataAccess === "Open Source") && (
              <div className="absolute -bottom-9 -right-7">
                <Star color={starColor} />
              </div>
            )}
            <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-20">
              <p>
                <strong>Author</strong>: {data.Author}
              </p>
              {summary && (
                <div>
                  <strong>Summary</strong>: {summary}
                </div>
              )}
              <p>
                <strong>Title</strong>: {data.Title}
              </p>
              <p>
                <strong>Tags</strong>: {data.Manual_Tags}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <Handle type="source" position={Position.Bottom} id={data.Key} />
    </div>
  );
}

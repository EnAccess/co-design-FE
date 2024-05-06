import { useMemo } from "react";
import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import Star from "@/components/icons/Star";
import { getBgColorClassName, getColorByAccess, getLevel } from "@/utils/nodes";
import Link from "next/link";
import { useHighlight } from "@/hooks/useHighlight";

export function NodeCard({
  data,
  sourcePosition,
  targetPosition,
  selected,
}: any) {
  const highlighted = useHighlight(data);

  const { className, access, starColor, summary } = useMemo(() => {
    const level = getLevel(data);
    const bgColor = getBgColorClassName(level);
    const access = data?.PARSED_MANUAL_TAGS?.ACCESS?.[0];
    const starColor = getColorByAccess(access);
    const summary = data.Notes?.replace(/<[^>]*>?/gm, "");
    const className = `py-4 px-2 text-xs w-52 rounded-md border-solid border-2 hover:border-4 box-content hover:relative transition-colors duration-1000 ${
      highlighted && "border-sky-300 border-4"
    } hover:border-purple-500 ${bgColor}`;
    return { access, starColor, summary, className };
  }, [data, highlighted]);

  const onClick = () => {
    if (!selected || !data?.Url) return;
    window?.open(data?.Url, "_blank")?.focus();
  };

  return (
    <div className="group cursor-pointer p-2">
      <Handle type="target" position={targetPosition} id={data.Key} />
      <div onClick={onClick} className={className}>
        <div className="relative">
          <p className="z-10">{data.Title}</p>
          <p className="z-10">{data.Author}</p>
          {(access === "Institutional Access" ||
            access === "Paid Service" ||
            access === "Open Source") && (
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
      <Handle type="source" position={sourcePosition} id={data.Key} />
    </div>
  );
}

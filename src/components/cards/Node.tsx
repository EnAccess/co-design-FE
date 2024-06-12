import Star from "@/components/icons/Star";
import { useHighlight } from "@/hooks/useHighlight";
import { getBgColorClassName, getColorByAccess, getLevel } from "@/utils/nodes";
import { useMemo } from "react";
import { Handle } from "reactflow";
import "reactflow/dist/style.css";

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
    if (!selected || !data?.url) return;
    window?.open(data?.url, "_blank")?.focus();
  };

  return (
    <div className="group cursor-pointer">
      <Handle type="target" position={targetPosition} id={data.key} />
      <div onClick={onClick} className={className}>
        <div className="relative">
          {data.title && <p className="z-10">{data.title}</p>}
          {data.authors && <p className="z-10">{data.authors}</p>}
          {(access === "Institutional Access" ||
            access === "Paid Service" ||
            access === "Open Source") && (
            <div className="absolute -bottom-9 -right-7">
              <Star color={starColor} />
            </div>
          )}
          <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-20">
            {data.authors && (
              <p>
                <strong>Author(s)</strong>: {data.authors}
              </p>
            )}
            {summary && (
              <div>
                <strong>Summary</strong>: {summary}
              </div>
            )}
            {data.title && (
              <p>
                <strong>Title</strong>: {data.title}
              </p>
            )}
            <p>
              <strong>Tags</strong>: {data.tags}
            </p>
          </div>
        </div>
      </div>
      <Handle type="source" position={sourcePosition} id={data.key} />
    </div>
  );
}

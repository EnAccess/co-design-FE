import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import Star from "@/components/icons/Star";
import classNames from "classnames";
import { getColorByAccess } from "@/utils/helpers";

export function NodeCard({ data, id, isToolsBlock = false }: any) {
  id = data.Key;
  const level = Array.isArray(data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL)
    ? data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL[0]
    : data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL;
  const bgColor = classNames({
    "bg-level-primary-0 border-level-secondary-0": level == 0,
    "bg-level-primary-1 border-level-secondary-1": level == 1,
    "bg-level-primary-2 border-level-secondary-2": level == 2,
    "bg-level-primary-3 border-level-secondary-3": level == 3,
  });
  const dataAccess = data.PARSED_MANUAL_TAGS.ACCESS;
  const starColor = getColorByAccess(dataAccess);
  return (
    <div className="group cursor-pointer">
      {isToolsBlock === false && (
        <>
          <Handle type="source" position={Position.Bottom} id={id} />
          <Handle type="target" position={Position.Top} id={id} />
        </>
      )}

      <div
        className={`py-4 px-2 text-xs w-52 rounded-md border-solid border-2 hover:border-4 box-content hover:relative hover:border-purple-500 ${bgColor}`}
      >
        <div className="relative ">
          <p className="z-10">{data.Title}</p>
          {dataAccess === "Institutional Access" ||
          dataAccess === "Paid Service" ||
          dataAccess === "Open Source" ? (
            <div className="absolute -bottom-5 -right-5">
              <Star color={starColor} />
            </div>
          ) : (
            ""
          )}
          <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-20">
            <p>Extra: {data.Extra}</p>
            <p>{data.Manual_Tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

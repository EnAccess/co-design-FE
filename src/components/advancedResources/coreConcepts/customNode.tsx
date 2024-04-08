import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import Star from "@/components/icons/Star";
import classNames from "classnames";

export function CustomNode({ data, id }: any) {
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
  return (
    <div className="group cursor-pointer">
      <Handle type="source" position={Position.Bottom} id={id} />
      <Handle type="target" position={Position.Top} id={id} />

      <div
        className={`py-4 px-2 text-sm w-52 rounded-md border-solid border-2 hover:border-4 box-content hover:relative hover:border-purple-500 ${bgColor}`}
      >
        <div className="relative">
          {data.Title}
          {data.PARSED_MANUAL_TAGS?.ACCESS === "Institutional Access" ? (
            <div className="absolute -bottom-5 -right-5">
              <Star />
            </div>
          ) : (
            ""
          )}
          <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-80">
            <p>Extra: {data.Extra}</p>
            <p>{data.Manual_Tags}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

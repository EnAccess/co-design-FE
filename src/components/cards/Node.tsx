import { Handle, Position } from "reactflow";
import "reactflow/dist/style.css";
import Star from "@/components/icons/Star";
import { getBgColor, getColorByAccess } from "@/utils/helpers";

export function NodeCard({ data }: any) {
  const bgColor = getBgColor(data);
  const dataAccess = data?.PARSED_MANUAL_TAGS?.ACCESS?.[0];
  const starColor = getColorByAccess(dataAccess);
  const summary = data.Notes?.replace(/<[^>]*>?/gm, "");

  return (
    <div className="group cursor-pointer">
      <Handle type="target" position={Position.Top} id={data.Key} />
      <div
        className={`py-4 px-2 text-xs w-52 rounded-md border-solid border-2 hover:border-4 box-content hover:relative hover:border-purple-500 ${bgColor}`}
      >
        <div className="relative">
          <p className="z-10">{data.Title}</p>
          {(dataAccess === "Institutional Access" ||
            dataAccess === "Paid Service" ||
            dataAccess === "Open Source") && (
            <div className="absolute -bottom-5 -right-5">
              <Star color={starColor} />
            </div>
          )}
          <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-50">
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
      <Handle type="source" position={Position.Bottom} id={data.Key} />
    </div>
  );
}

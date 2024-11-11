import { Group as NodeGroup } from "../types/interfaces";
import Block from "./Block";

const Group = ({
  data,
  minifiedHeader,
  maxColumns,
}: {
  data: NodeGroup;
  minifiedHeader?: boolean;
  maxColumns?: number;
}) => {
  return (
    <>
      <h3 className="text-neutral-500 font-extrabold text-center text-7xl mt-20 mb-12">
        {data.title != "NO GROUP" && data.title}
      </h3>
      <div
        className={`p-4 grid grid-cols-10 grid-flow-row-dense gap-3 text-sm w-full`}
      >
        {data.blocks.map((block, i) => {
          return (
            <Block
              key={`${data.title}-${block.title}-${i}`}
              title={block.title}
              description={block.description}
              entries={block.entries}
              minifiedHeader={minifiedHeader}
              maxColumns={maxColumns}
            />
          );
        })}
      </div>
    </>
  );
};

export default Group;

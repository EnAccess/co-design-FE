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
      <h3 className="text-neutral-500 font-semibold text-center text-5xl mt-20 mb-12">
        {data.title != "NO GROUP" && data.title}
      </h3>
      <div
          className={`p-4 grid grid-cols-10 grid-flow-row-dense gap-3 text-sm w-full`}
        >
          {data.blocks.map((block, i) => {
            // Sort entries based on "CO-DESIGN LEVEL"
            const sortedEntries = block.entries.sort((b, a) => {
              const levelA = a.PARSED_MANUAL_TAGS["CO-DESIGN LEVEL"] || "";
              const levelB = b.PARSED_MANUAL_TAGS["CO-DESIGN LEVEL"] || "";

              // Assuming "CO-DESIGN LEVEL" is alphanumeric, adjust comparison logic accordingly
              if (levelA < levelB) return -1;
              if (levelA > levelB) return 1;
              return 0;
            });

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

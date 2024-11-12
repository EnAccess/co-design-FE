import { Group } from "../types/interfaces";
import Block from "./Block";

const AdvancedResources = ({
  data,
  minifiedHeader,
}: {
  data: Group;
  minifiedHeader?: boolean;
}) => {
  return (
    <>
      <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
        {data.title !== "NO GROUP" && data.title}
      </h3>
      <div className="flex w-full">
        <div
          className={`p-4 grid grid-cols-8 grid-flow-col justify-center gap-3 text-sm w-full`}
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
              <div key={`${data.title}-${block.title}-${i}`}>
                <Block
                  title={block.title}
                  description={block.description}
                  entries={sortedEntries} // Use sorted entries here
                  minifiedHeader={minifiedHeader}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdvancedResources;





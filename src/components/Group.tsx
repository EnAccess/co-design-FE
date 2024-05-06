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
        {data.title != "NO GROUP" && data.title}
      </h3>
      <div className="flex w-full">
        <div
          className={`p-4 grid grid-cols-8 grid-flow-col justify-center gap-3 text-sm w-full`}
        >
          {data.blocks.map((block, i) => {
            return (
              <Block
                key={`${data.title}-${block.title}-${i}`}
                title={block.title}
                description={block.description}
                entries={block.entries}
                minifiedHeader={minifiedHeader}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdvancedResources;

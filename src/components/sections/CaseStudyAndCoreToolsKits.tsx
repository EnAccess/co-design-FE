import React from "react";
import { Entries, Entry, LevelEntries } from "@/types/interfaces";
import { NodeCard } from "../cards/Node";
interface Props {
  categorizedEntries: LevelEntries;
  isToolsBlock: Boolean;
}

const renderNodeCards = (entries: Entries, isToolsBlock: Boolean) => {
  return entries.map((data: Entry) => (
    <div key={data.Key} className="w-64 flex">
      <NodeCard data={data} isToolsBlock={isToolsBlock} />
    </div>
  ));
};

const levels = ["level1", "level2", "level3"];
const CaseStudyAndCoreToolsKitsSection = ({
  categorizedEntries,
  isToolsBlock,
}: Props) => {
  return (
    <div className="md:p-10">
      <div>
        {levels.map((level: string) => (
          <div key={level} className="flex p-4 gap-6 flex-wrap">
            {renderNodeCards(
              categorizedEntries[level as keyof typeof categorizedEntries],
              isToolsBlock
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyAndCoreToolsKitsSection;

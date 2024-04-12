import React from "react";
import { Entries, Entry } from "@/types/interfaces";
import { NodeCard } from "../cards/Node";
interface Props {
  categorizedEntries: {
    level1: Entries;
    level2: Entries;
    level3: Entries;
  };
}

const renderNodeCards = (entries: Entries) => {
  return entries.map((data: Entry) => (
    <div key={data.Key} className="w-72">
      <NodeCard data={data} id={undefined} />
    </div>
  ));
};

const levels = ["level1", "level2", "level3"];
const CaseStudyAndCoreToolsKitsSection = ({ categorizedEntries }: Props) => {
  return (
    <div className="md:p-10">
      <div>
        {levels.map((level: string) => (
          <div key={level} className="flex p-4 gap-6 flex-wrap">
            {renderNodeCards(
              categorizedEntries[level as keyof typeof categorizedEntries]
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyAndCoreToolsKitsSection;

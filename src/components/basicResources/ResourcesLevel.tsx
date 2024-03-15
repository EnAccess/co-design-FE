import { Entries, Entry } from "@/types/interfaces";
import React from "react";
import InformationCard from "../cards/InformationCard";
import { ArcherContainer } from "react-archer";
interface Props {
  basicResourcesLevel: { level1: Entries; level2: Entries; level3: Entries };
}
const ResourcesLevel = ({ basicResourcesLevel }: Props) => {
  return (
    <div>
      <ArcherContainer>
        {basicResourcesLevel.level2.map((data: Entry) => (
          <div key={data.Key} className="w-72">
            <InformationCard key={data.Key} data={data} />
          </div>
        ))}
      </ArcherContainer>
    </div>
  );
};

export default ResourcesLevel;

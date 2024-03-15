import { Entries, Entry } from "@/types/interfaces";
import React from "react";
import InformationCard from "../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  basicResourcesLevel: { level2: Entries; level3: Entries };
}
const ResourcesLevelEntries = ({ basicResourcesLevel }: Props) => {
  return (
    <div>
      <ArcherContainer>
        {basicResourcesLevel.level3.map((data) => (
          <div key={data.Key} className="w-72">
            <InformationCard key={data.Key} data={data} />
          </div>
        ))}
      </ArcherContainer>
    </div>
  );
};

export default ResourcesLevelEntries;

import React from "react";
import { Entries, Entry } from "@/types/interfaces";
import InformationCard from "../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  categorizedEntries: { level1: Entries; level2: Entries; level3: Entries };
}

const Casestudy = ({ categorizedEntries }: Props) => {
  return (
    <div>
      <ArcherContainer>
        <div className="flex p-4 gap-2">
          {categorizedEntries.level3.map((data: Entry) => (
            <InformationCard key={data.Key} data={data} />
          ))}
        </div>
        <div className="flex p-4 gap-2">
          {categorizedEntries.level2.map((data: Entry) => (
            <InformationCard key={data.Key} data={data} />
          ))}
        </div>
        <div className="flex p-4 gap-2">
          {categorizedEntries.level1.map((data: Entry) => (
            <InformationCard key={data.Key} data={data} />
          ))}
        </div>
      </ArcherContainer>
    </div>
  );
};

export default Casestudy;

import React from "react";
import { Entries, Entry } from "@/types/interfaces";
import InformationCard from "../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  categorizedEntries: { level1: Entries; level2: Entries; level3: Entries };
}

const CaseStudy = ({ categorizedEntries }: Props) => {
  return (
    <div className="md:p-10">
      <ArcherContainer>
        <div className="flex p-4 gap-6 flex-wrap">
          {categorizedEntries.level3.map((data: Entry) => (
            <div key={data.Key} className="w-72">
              <InformationCard data={data} />
            </div>
          ))}
        </div>
        <div className="flex p-4 gap-6 flex-wrap">
          {categorizedEntries.level2.map((data: Entry) => (
            <div key={data.Key} className="w-72">
              <InformationCard data={data} />
            </div>
          ))}
        </div>
        <div className="flex p-4 gap-6 flex-wrap">
          {categorizedEntries.level1.map((data: Entry) => (
            <div key={data.Key} className="w-72">
              <InformationCard data={data} />
            </div>
          ))}
        </div>
      </ArcherContainer>
    </div>
  );
};

export default CaseStudy;

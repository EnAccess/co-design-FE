import { Entries, Entry } from "@/types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  systemApproach: Entries;
}
const SystemApproachEntries = ({ systemApproach }: Props) => {
  return (
    <>
      <div>
        <ArcherContainer>
          <div className="flex flex-wrap gap-4 pb-3 px-2 ">
            {[systemApproach[5]].map((data: Entry) => (
              <div key={data.Key} className="w-60">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
      </div>
    </>
  );
};

export default SystemApproachEntries;

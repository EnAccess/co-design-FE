import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  decolonizationEntries: Entries;
}
const DecolonizationApproach = ({ decolonizationEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
          <div className="flex flex-wrap gap-4 pb-3 px-2">
            {decolonizationEntries.slice(0,3).map((data: Entry) => (
              <div key={data.Key} className="w-52">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default DecolonizationApproach;
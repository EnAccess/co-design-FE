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
          <div className="flex flex-wrap gap-6 p-6 mt-10 ">
            {decolonizationEntries.slice(0,2).concat(decolonizationEntries.slice(3,4)).map((data: Entry) => (
              <div key={data.Key} className="w-56">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default DecolonizationApproach;

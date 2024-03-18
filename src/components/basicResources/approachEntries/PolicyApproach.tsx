import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  policyEntries: Entries;
}
const PolicyApproach = ({ policyEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
        <div className="flex justify-between gap-4">
          {policyEntries.slice(0,1).concat(policyEntries.slice(-1)).map((data: Entry) => (
            <div key={data.Key} className="w-72">
              <InformationCard key={data.Key} data={data} />
            </div>
          ))}
        </div>
      </ArcherContainer>
    </>
  );
};

export default PolicyApproach;

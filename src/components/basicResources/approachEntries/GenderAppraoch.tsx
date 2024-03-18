import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  genderEntries: Entries;
}
const GenderApproach = ({ genderEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
          <div className="flex justify-between pb-3">
            {genderEntries.slice(0,1).map((data: Entry) => (
              <div key={data.Key} className="w-60">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default GenderApproach;
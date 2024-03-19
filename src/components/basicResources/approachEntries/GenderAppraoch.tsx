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
          <div>
            {genderEntries.slice(0,1).map((data: Entry) => (
              <div key={data.Key} className="w-80">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default GenderApproach;

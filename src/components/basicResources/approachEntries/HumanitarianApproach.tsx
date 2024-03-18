import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  humanitarianEntries: Entries;
}
const HumanitarianApproach = ({ humanitarianEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
          <div className="flex gap-4">
            {humanitarianEntries.slice(0,2).map((data: Entry) => (
              <div key={data.Key} className="w-60">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default HumanitarianApproach;

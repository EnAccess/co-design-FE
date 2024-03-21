import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  humanitarianEntries: Entries;
}
const HumanitarianPolicy = ({ humanitarianEntries }: Props) => {
    console.log("my data is:", humanitarianEntries)
  return (
    <>
      <ArcherContainer>
          <div className="p-4">
            {[humanitarianEntries[2]].map((data: Entry) => (
              <div key={data.Key} className="w-60">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default HumanitarianPolicy;

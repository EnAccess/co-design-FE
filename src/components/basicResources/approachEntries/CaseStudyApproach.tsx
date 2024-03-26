import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  caseStudyEntries: Entries;
}
const CaseStudyApproach = ({ caseStudyEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
          <div className="flex justify-between p-3">
            {caseStudyEntries.slice(2,3).concat(caseStudyEntries.slice(5,6)).map((data: Entry) => (
              <div key={data.Key} className="w-72">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default CaseStudyApproach;

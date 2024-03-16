import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";
import { Entry } from "@/type/interface";

interface Props {
  approachEntries: Entry[];
}
const MultidiscilnaryByPracticeApproach = ({approachEntries} :Props) => {
  return (
    <>
      <div className="pt-6 flex gap-3">
        <ArcherContainer>
          <div className="border-8 border-dashed">
            <div className="mt-3 pb-6">
              <h1 className="text-center font-bold text-lg">PRACTICE</h1>
            </div>
            <div className="flex flex-wrap gap-4 pb-3 px-2 ">
              {approachEntries.map((data: Entry) => (
                <div key={data.Key} className="w-60">
                  <InformationCard key={data.Key} data={data} />
                </div>
              ))}
            </div>
          </div>
        </ArcherContainer>
      </div>
    </>
  );
};

export default MultidiscilnaryByPracticeApproach;

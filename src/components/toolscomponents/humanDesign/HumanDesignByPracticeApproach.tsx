import { Entries } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entries;
}
const HumanDesignApproches = ({ approachEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
        <div className="border-4 border-dashed border-gray-500 rounded">
          <h1 className="text-center text-gray-700 font-semibold text-lg my-3">PRACTICE</h1>

          <div className="flex flex-col items-center gap-2 mb-3">
            {approachEntries.map((data) => (
              <div key={data.Key} className="w-52 px-3">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </div>
      </ArcherContainer>
    </>
  );
};

export default HumanDesignApproches;

import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";
import { Entries } from "../../../types/interfaces";

interface Props {
  approachEntries: Entries;
}
const MultidiscilnaryByTheoryApproach = ({ approachEntries }: Props) => {
  return (
    <ArcherContainer>
      <div className="border-4 border-dashed border-gray-500 rounded h-full">
        <h1 className="text-center text-gray-700 font-semibold text-lg my-4">
          THEORY
        </h1>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {approachEntries.map((data) => (
            <div key={data.Key} className="w-56">
              <InformationCard key={data.Key} data={data} />
            </div>
          ))}
        </div>
      </div>
    </ArcherContainer>
  );
};

export default MultidiscilnaryByTheoryApproach;

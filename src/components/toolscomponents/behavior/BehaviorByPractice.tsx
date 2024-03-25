import { Entries } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entries;
}
const BehaviorByPractice = ({ approachEntries }: Props) => {
  return (
    <ArcherContainer>
      <div className="border-4 border-dashed border-gray-500 rounded pb-4">
        <h1 className="text-center text-gray-700 font-semibold text-lg my-3">
          PRACTICE
        </h1>

        <div className="flex flex-wrap justify-center gap-2">
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

export default BehaviorByPractice;

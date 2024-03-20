import { Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const BehaviorByTheory = ({ approachEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
        <div className="border-4 border-dashed border-gray-500 rounded">
          <h1 className="text-center text-gray-700 font-semibold text-lg">
            THEORY
          </h1>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {approachEntries.map((data: Entry) => (
              <div key={data.Key} className="w-56">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </div>
      </ArcherContainer>
    </>
  );
};

export default BehaviorByTheory;

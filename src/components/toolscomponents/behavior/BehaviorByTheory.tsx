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
      <div className="flex pt-6">
        <ArcherContainer>
          <div className="border-4 border-dashed border-gray-500">
            <div className="mt-3 pb-6">
              <h1 className="text-center font-bold text-lg">THEORY</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-2 m-6 ">
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

export default BehaviorByTheory;

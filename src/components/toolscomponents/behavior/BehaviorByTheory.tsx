import { Entry } from "@/type/interface";
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
          <div className="border-8 border-dashed">
            <div className="mt-3 pb-6">
              <h1 className="text-center font-bold text-lg">THEORY</h1>
            </div>
            <div className="flex flex-wrap gap-4 pb-3 px-2 ">
              {approachEntries.map((data: Entry) => (
                <div key={data.Key} className="w-72">
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

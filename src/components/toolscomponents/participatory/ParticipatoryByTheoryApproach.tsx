import { Entry } from "@/type/interface";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const ParticipatoryByTheoryApproch = ({ approachEntries }: Props) => {
  return (
    <div className="pt-6">
      <ArcherContainer>
        <div className="border-4 border-dashed">
          <div className="mt-3 pb-6">
            <h1 className="text-center font-bold text-lg">THEORY</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {approachEntries.map((data: Entry) => (
              <div key={data.Key} className="w-52">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default ParticipatoryByTheoryApproch;

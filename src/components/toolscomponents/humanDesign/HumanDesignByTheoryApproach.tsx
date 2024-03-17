import { Entry } from "@/type/interface";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import YellowCard from "../../cards/YellowCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const HumanDesignByTheoryApproches = ({ approachEntries }: Props) => {
  return (
    <div className="pt-6">
      <ArcherContainer>
        <div className="border-4 border-dashed">
          <div className="mt-3 pb-6">
            <h1 className="text-center font-bold text-lg">PRACTICE</h1>
          </div>
          <div>
            {approachEntries.map((data: Entry) => (
              <div key={data.Key} className="w-60">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default HumanDesignByTheoryApproches;

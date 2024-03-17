import { Entry } from "@/type/interface";
import React from "react";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const TechnicalApproches = ({ approachEntries }: Props) => {
  return (
    <div className="border-4 border-dashed border-gray-200 my-8 p-8 w-1/2 h-fit">
      <div>
        <YellowCard
          title="Technical Approaches"
          description="Technical Approaches engage with energy systems and services through a technical lens. We have chosen to only include technical approaches which also integrate the wider socio-cultural, environmental, and financial context."
          className=""
        />
        <div className="pt-6">
          <ArcherContainer>
            <div className="grid grid-cols-3 gap-2">
              {approachEntries.map((data: Entry) => (
                <div key={data.Key} className="w-56">
                  <InformationCard key={data.Key} data={data} />
                </div>
              ))}
            </div>
          </ArcherContainer>
        </div>
      </div>
    </div>
  );
};

export default TechnicalApproches;

import { Entry } from "../../types/interfaces";
import React from "react";
import InformationCard from "../cards/InformationCard";
import TitleCard from "../cards/TitleCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const TechnicalApproches = ({ approachEntries }: Props) => {
  return (
    <div className="border-4 border-dashed border-gray-400 bg-gray-50 p-3">
      <div>
        <TitleCard
          title="Technical Approaches"
          description="Technical Approaches engage with energy systems and services through a technical lens. We have chosen to only include technical approaches which also integrate the wider socio-cultural, environmental, and financial context."
          className=""
        />
        <div className="pt-4">
          <ArcherContainer>
            <div className="grid grid-cols-3 gap-4">
              {approachEntries.map((data: Entry) => (
                <div key={data.Key} className="w-60">
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

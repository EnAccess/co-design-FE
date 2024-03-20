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
    <div className="border-4 border-dashed border-gray-400 bg-gray-50 my-8 p-8 h-fit">
      <div>
        <TitleCard
          title="Technical Approaches"
          description="Technical Approaches engage with energy systems and services through a technical lens. We have chosen to only include technical approaches which also integrate the wider socio-cultural, environmental, and financial context."
          className=""
        />
        <div className="py-6">
          <ArcherContainer>
            <div className="flex flex-wrap justify-center gap-6">
              {approachEntries.map((data: Entry) => (
                <div key={data.Key} className="w-72">
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

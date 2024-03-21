import { Entries } from "../../types/interfaces";
import React from "react";
import InformationCard from "../cards/InformationCard";
import TitleCard from "../cards/TitleCard";
import { ArcherContainer } from "react-archer";
import { titleEntries } from "@/utils/titleEntries";

interface Props {
  approachEntries: Entries;
}
const TechnicalApproches = ({ approachEntries }: Props) => {
  return (
    <div className="border-4 border-dashed border-gray-400 bg-gray-50 p-3">
      <div>
        <TitleCard
          title={titleEntries[5].title}          
          description={titleEntries[5].description}
        />
        <div className="pt-4">
          <ArcherContainer>
            <div className="grid grid-cols-3 gap-4">
              {approachEntries.map((data) => (
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

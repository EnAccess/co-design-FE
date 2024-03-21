import React from "react";
import TitleCard from "../cards/TitleCard";
import { ArcherContainer } from "react-archer";
import InformationCard from "../cards/InformationCard";
import { Entry } from "../../types/interfaces";

interface Props {
  basicToolsEntries: Entry[];
}
const BasicTools = ({ basicToolsEntries }: Props) => {
  return (
    <div className="border-4 border-dashed border-gray-400 bg-gray-50 p-4">
      <div>
        <TitleCard
          title="BASIC TOOLS"
          description="This box contains an overview of the basic tools needed to conduct effective co-design processes"
        />
        <div>
          <ArcherContainer>
            <div className="flex flex-wrap justify-center gap-8 p-6">
              {basicToolsEntries.map((data: Entry) => (
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

export default BasicTools;

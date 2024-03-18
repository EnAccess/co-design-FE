import React from "react";
import TitleCard from "../cards/TitleCard";
import { ArcherContainer } from "react-archer";
import InformationCard from "../cards/InformationCard";
import { Entry } from "../../type/interface";

interface Props {
  basicToolsEntries: Entry[];
}
const BasicTools = ({ basicToolsEntries }: Props) => {
  return (
    <div className="border-4 border-dashed border-gray-200 bg-gray-50">
      <div>
        <TitleCard
          title="BASIC TOOLS"
          description="This box contains an overview of the basic tools needed to conduct effective co-design processes"
        />
        <div className="flex gap-10 pt-6 px-10">
          <ArcherContainer>
            <div className="flex flex-wrap gap-8 px-3 pb-3">
              {basicToolsEntries.map((data: Entry) => (
                <div key={data.Key} className=" bg-rose-200 w-72">
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

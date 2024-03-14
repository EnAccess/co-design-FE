import { Entry } from "@/type/interface";
import React from "react";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

interface Props {
  aproachEntries: Entry[];
}
const RightApproches = ({ aproachEntries }: Props) => {
  return (
    <div>
      <div>
        <div className="border-4 border-dashed border-gray-200 my-8 p-8">
          <div>
            <YellowCard title="" description="" />
            <div className="flex gap-10 pt-6">
              <ArcherContainer>
                <div className="flex flex-wrap gap-8 px-3 pb-3">
                  {aproachEntries.map((data: Entry) => (
                    <div key={data.Key} className="w-72">
                      <InformationCard key={data.Key} data={data} />
                    </div>
                  ))}
                </div>
              </ArcherContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightApproches;

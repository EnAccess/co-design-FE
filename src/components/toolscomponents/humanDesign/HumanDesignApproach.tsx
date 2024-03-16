import { Entry } from "@/type/interface";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import YellowCard from "../../cards/YellowCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const HumanDesignApproches = ({ approachEntries }: Props) => {
  return (
    <div>
      <div>
        <div className="border-4 border-dashed border-gray-200 my-8 p-8">
          <div>
            <YellowCard
              title="Human-Centered Design & Design Thinking"
              description="Human-Centered Design & Design Thinking combine to produce a problem solving methodology which captures the wishes of a centralised user group and encourages significant ideation. "
            />
            <div className="flex gap-10 pt-6">
              <ArcherContainer>
                <div className="border-4 border-dashed w-1/2">
                  <div className="mt-3 pb-6">
                    <h1 className="text-center font-bold text-lg">PRACTICE</h1>
                  </div>
                  <div className="flex flex-wrap gap-4 pb-3 px-2 ">
                    {approachEntries.map((data: Entry) => (
                      <div key={data.Key} className="w-60">
                        <InformationCard key={data.Key} data={data} />
                      </div>
                    ))}
                  </div>
                </div>
              </ArcherContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanDesignApproches;

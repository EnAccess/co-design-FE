import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

const ElementConcept = () => {
  return (
    <div className="mt-44">
      <div className="flex text-gray-400 justify-center items-center py-4 text-2xl font-semibold">
        <h1>Element Used to Create Effective Solutions</h1>
      </div>

      <div className="flex gap-3 max-w-[120%] h-[22.2rem]">
        <div className="border-4 border-dashed max-w-[60%]">
          <YellowCard
            title={`Systems Approaches
                to Energy Access`}
            description={
              "Engaging with entire systems approaches requires humanitarian practitioners to challenge and rethink how to interact with humanitarian systems that surround them. This outlines what needs to change and how."
            }
          />
          <div className="float-end mr-10 mt-20 w-46">
            <ArcherContainer>
              <InformationCard data={Data[101]} />
            </ArcherContainer>
          </div>
        </div>

        <div className="gap-4">
          <div className="flex gap-4">
            <div className="border-4 border-dashed">
              <YellowCard
                title={`Scale & Replicability`}
                description={
                  "Whilst the idea of replicability (the ability to copy and paste using the same resources) is embedded in many humanitarian organisations, true scalability is often reserved for the private sector - how can the two learn from each other to create more effective and efficient humanitarian programs?"
                }
              />
              <div className="w-46 mt-20">
                <ArcherContainer>
                  <InformationCard data={Data[84]} />
                </ArcherContainer>
              </div>
            </div>
            <div className="border-4 border-dashed">
              <YellowCard
                title={`Scale & Replicability`}
                description={
                  "Whilst the idea of replicability (the ability to copy and paste using the same resources) is embedded in many humanitarian organisations, true scalability is often reserved for the private sector - how can the two learn from each other to create more effective and efficient humanitarian programs?"
                }
              />
              <div className="w-46 mt-20">
                <ArcherContainer>
                  <InformationCard data={Data[84]} />
                </ArcherContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementConcept;

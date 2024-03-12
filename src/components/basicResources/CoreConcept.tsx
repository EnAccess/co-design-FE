import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

const CoreConcept = () => {
  return (
    <>
      <div className="flex text-gray-400 justify-center items-center py-4 text-2xl font-semibold">
        <h1>Core Concepts of Collaborative Design Process</h1>
      </div>

      <div className="flex gap-4 max-w-full h-full border-4 border-red-500">
        <div className="border-4 border-dashed w-1/2">
          <YellowCard
            title={`Systems Approaches
                to Energy Access`}
            description={
              "Engaging with entire systems approaches requires humanitarian practitioners to challenge and rethink how to interact with humanitarian systems that surround them. This outlines what needs to change and how."
            }
          />
          <div className="float-end mr-32 mt-10 w-48">
            <ArcherContainer>
              <InformationCard data={Data[122]} />
            </ArcherContainer>
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex gap-4">
            <div className="border-4 border-dashed">
              <YellowCard
                title={`Scale & Replicability`}
                description={
                  "Whilst the idea of replicability (the ability to copy and paste using the same resources) is embedded in many humanitarian organisations, true scalability is often reserved for the private sector - how can the two learn from each other to create more effective and efficient humanitarian programs?"
                }
              />
              <div className="w-96 mt-10 float-end mr-12">
                <ArcherContainer>
                  <InformationCard data={Data[84]} />
                </ArcherContainer>
              </div>
            </div>
            <div className="border-4 border-dashed">
              <YellowCard
                title={`Localisation`}
                description={"Formally recognised by the Grand Bargain, localisation engages local and national actors in all phases of humanitarian action. This theme supports localisation processes which include the voices of the forcibly displaced in leading in the sector."
                }
              />
              <div className="flex ml-3 mt-28 mr-24 gap-3 mb-12 w-96">
                <div>
                  <ArcherContainer>
                    <InformationCard data={Data[100]} />
                  </ArcherContainer>
                </div>
                <div>
                  <ArcherContainer>
                    <InformationCard data={Data[119]} />
                  </ArcherContainer>
                </div>
              </div>
            </div>
          </div>
          <div className="border-4 border-dashed mt-6 flex">
            <div className="w-1/3 h-96 flex flex-col mb-6 mt-2">
              <YellowCard
                title={`Decolonisation`}
                description={
                  "Decolonisation reflects a just transition to rebalance power among the various stakeholders in the humanitarian sector. The theme looks at the stages of transformation in power imbalances, decolonising aid and highlights the need for systematic changes in how the humanitarian sector operates"
                }
              />
            </div>
            <div className="flex gap-10 mt-2 mr-28 w-2/3">
              <div className="mt-24 mb-2 w-48">
                <ArcherContainer>
                  <InformationCard data={Data[101]} />
                </ArcherContainer>
              </div>
              <div className="mt-2 w-56">
                <ArcherContainer>
                  <InformationCard data={Data[17]} />
                </ArcherContainer>
              </div>
              <div className="mt-24 mb-2 w-56">
                <ArcherContainer>
                  <InformationCard data={Data[11]} />
                </ArcherContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreConcept;

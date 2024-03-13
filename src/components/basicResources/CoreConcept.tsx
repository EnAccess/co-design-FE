import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

const CoreConcept = () => {
  return (
    <>
      <div className="flex text-gray-500 justify-center items-center py-6 text-3xl font-semibold">
        <h1>Core Concepts of Collaborative Design Process</h1>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row md:max-w-full h-full">
        <div className="border-4 border-dashed md:w-1/2">
          <YellowCard
            title={`Systems Approaches
                to Energy Access`}
            description={
              "Engaging with entire systems approaches requires humanitarian practitioners to challenge and rethink how to interact with humanitarian systems that surround them. This outlines what needs to change and how."
            }
            className="w-3/4 mt-2 ml-2"
          />
          <div className="float-end mr-44 mb-4 mt-10 w-48">
            <ArcherContainer>
              <InformationCard data={Data[122]} />
            </ArcherContainer>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border-4 border-dashed">
              <YellowCard
                title={`Scale & Replicability`}
                description={
                  "Whilst the idea of replicability (the ability to copy and paste using the same resources) is embedded in many humanitarian organisations, true scalability is often reserved for the private sector - how can the two learn from each other to create more effective and efficient humanitarian programs?"
                }
              />
              <div className="w-96 mt-10 float-end mr-12 mb-4">
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
          <div className="border-4 border-dashed mt-6 flex w-full">
            <div className="py-2">
              <YellowCard
                title={`Decolonisation`}
                description={
                  "Decolonisation reflects a just transition to rebalance power among the various stakeholders in the humanitarian sector. The theme looks at the stages of transformation in power imbalances, decolonising aid and highlights the need for systematic changes in how the humanitarian sector operates"
                }
                className="flex flex-col gap-4 w-96 ml-3"
              />
            </div>
            <div className="flex gap-10 mt-2 ml-4">
              <div className="mt-32 lg:w-44">
                <ArcherContainer>
                  <InformationCard data={Data[101]} />
                </ArcherContainer>
              </div>
              <div className="mt-2 lg:w-52">
                <ArcherContainer>
                  <InformationCard data={Data[17]} />
                </ArcherContainer>
              </div>
              <div className="mt-32 lg:w-52 mr-6 mb-4">
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

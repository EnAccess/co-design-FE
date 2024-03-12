import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

const CriteriaConcept = () => {
  return (
    <>
      <div className="flex text-gray-400 justify-center items-center py-4 text-2xl font-semibold">
        <h1>Criteria for Good Design</h1>
      </div>
      <div className="flex gap-4 ">
        <div className="border-4 border-dashed w-1/3">
          <YellowCard
            title={`Artificial Intelligence &
            Machine Learning`}
            description={
              "AI can be leveraged to create content to amplify local voices, navigating complex funding mazes, and minimising legal and administration costs that slow action - but it cannot replace human interaction or trusting partnerships."
            }
          />
        </div>
        <div className="border-4 border-dashed">
          <YellowCard
            title={`Humanitarian Principles?`}
            description={
              "Grounded through the core Humanitarian Principles, this theme looks to understand and explore the humanitarian principles, within the context of “do no harm” and “ethics” based approaches to working with vulnerable groups in order to ultimately connect to the wider topic of energy justice (and just transitions)."
            }
          />
          <div className="flex justify-end gap-6 py-8 w-96 mr-2">
            <div>
              <ArcherContainer>
                <InformationCard data={Data[13]} />
              </ArcherContainer>
            </div>
            <div>
              <ArcherContainer>
                <InformationCard data={Data[8]} />
              </ArcherContainer>
            </div>
          </div>
          <div className="w-60 ml-6">
              <ArcherContainer>
                <InformationCard data={Data[138]} />
              </ArcherContainer>
            </div>
        </div>
        <div className="border-4 border-dashed w-1/2">
          <YellowCard
            title={`Policy`}
            description={
              "The theme of policy addresses the challenges and opportunities of frameworks that address humanitarian issues. This theme cuts across all the co-design levels as it includes participatory approaches, inclusive designs and localisation processes to enable sustainable interventions"
            }
          />
          <div className="float-end mr-32 mt-10 w-48">
            <ArcherContainer>
              <InformationCard data={Data[122]} />
            </ArcherContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriteriaConcept;

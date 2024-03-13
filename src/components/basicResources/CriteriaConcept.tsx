import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

const CriteriaConcept = () => {
  const dataItem = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "AI can be leveraged to create content to amplify local voices, navigating complex funding mazes, and minimising legal and administration costs that slow action - but it cannot replace human interaction or trusting partnerships.",
    },
    {
      title: "Humanitarian Principles?",
      description:
        "Grounded through the core Humanitarian Principles, this theme looks to understand and explore the humanitarian principles, within the context of “do no harm” and “ethics” based approaches to working with vulnerable groups in order to ultimately connect to the wider topic of energy justice (and just transitions).",
    },
    {
      title: "Policy",
      description:
        "The theme of policy addresses the challenges and opportunities of frameworks that address humanitarian issues. This theme cuts across all the co-design levels as it includes participatory approaches, inclusive designs and localisation processes to enable sustainable interventions",
    },
  ];
  
  return (
    <div className="py-20">
      <div className="flex text-gray-500 justify-center items-center py-4 text-3xl font-semibold">
        <h1>Criteria for Good Design</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="border-4 border-dashed">
          <YellowCard
            title={dataItem[0].title}
            description={dataItem[0].description}
            className="flex flex-col gap-3"
          />
        </div>
        <div className="border-4 border-dashed">
          <YellowCard
            title={dataItem[1].title}
            description={dataItem[1].description}
          />
          <div className="flex lg:ml-96 gap-6 py-8 w-96 mr-2">
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
            title={dataItem[2].title}
            description={dataItem[2].description}
          />
          <div className="w-48 mt-5 float-end mr-16">
            <ArcherContainer>
              <InformationCard data={Data[110]} />
            </ArcherContainer>
          </div>
          <div className="ml-10 py-28 w-48">
            <ArcherContainer>
              <InformationCard data={Data[81]} />
            </ArcherContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaConcept;

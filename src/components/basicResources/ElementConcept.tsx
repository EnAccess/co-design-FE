import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";

const ElementConcept = () => {
  const dataItem = [
    {
      title: "Capacity Bulding, Development & Sharing",
      description:
        "Capacity building evolves in the co-design spectrum to transform skills and knowledge to foster effective responses for sustainable solutions. It allows humanitarian practitioners to meaningfully engage with communities and provide opportunities to aid transformative solutions.",
    },
    {
      title: "Partnerships",
      description:
        "Partnerships, and collaborations between humanitarian organisations, provide the fundamental core of every humanitarian response. This theme tracks the evolution of partnerships from extractive to transformative, shifting decision making power to forcibly displaced groups themselves",
    },
    {
      title: `Gender,
      Disability & Inclusion`,
      description:
        "Inclusion calls for equal participation and representation of vulnerable and marginalised groups despite the differences in ethnicity, gender, disability and identity among others. This theme reflects the importance of inclusive design approaches and the active engagement in creating inclusive policies.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="flex text-gray-500 justify-center items-center py-4 text-3xl font-semibold">
        <h1>Element Used to Create Effective Solutions</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-3 max-w-full h-full">
        <div className="border-4 border-dashed max-w-[60%]">
          <YellowCard
            title={dataItem[0].title}
            description={dataItem[0].description}
            className="w-3/4 mt-2 ml-2"
          />
          <div className="w-44 mt-4 ml-12">
            <ArcherContainer>
              <InformationCard data={Data[32]} />
            </ArcherContainer>
          </div>
          <div className="float-end w-52 mt-10 mr-4 mb-2">
            <ArcherContainer>
              <InformationCard data={Data[135]} />
            </ArcherContainer>
          </div>
        </div>

        <div className="gap-4">
          <div className="flex gap-4">
            <div className="border-4 border-dashed">
              <YellowCard
                title={dataItem[1].title}
                description={dataItem[1].description}
              />
            </div>
            <div className="border-4 border-dashed">
              <YellowCard
                title={dataItem[2].title}
                description={dataItem[2].description}
              />
              <div className="w-64 ml-6 py-28">
                <ArcherContainer>
                  <InformationCard data={Data[3]} />
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

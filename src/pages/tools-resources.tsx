import HorizontalArrows from "@/components/toolscomponents/HorizontalArrows";
import BasicTools from "@/components/toolscomponents/BasicTools";
import React from "react";
import VerticalArrows from "@/components/toolscomponents/VerticalArrows";
import Data from "../../public/output.json";
import { Entry } from "@/type/interface";
import TechnicalApproches from "@/components/toolscomponents/TehnicalApproach";
import MultidisciplinaryApproches from "@/components/toolscomponents/MultidisciplinaryApproach";
import ParticipatoryApproches from "@/components/toolscomponents/ParticipatoryApproach";
import HumanDesignApproches from "@/components/toolscomponents/HumanDesignApproach";
import BehaviorByPractice from "@/components/toolscomponents/BehaviorByPractice";
import BehaviorByTheory from "@/components/toolscomponents/BehaviorByTheory";
import YellowCard from "@/components/cards/YellowCard";

const ToolsResources = () => {
  const basicToolsEntries = Data.filter((entry) =>
    entry.Manual_Tags.includes("BASIC TOOLS")
  ) as Entry[];

  const technicalAproachEntries = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: Technical Approaches")
    );
  }).filter((entry) => {
    return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
  }) as Entry[];

  const multidisciplinaryEntries = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
    );
  }) as Entry[];

  const participatoryApproachEntries = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
    );
  }) as Entry[];

  const behaviorByPracticeApproach = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: Behaviour Change Approaches")
    );
  }).splice(0, 5) as Entry[];

  const behaviorByTheoryApproach = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: Behaviour Change Approaches")
    );
  }).splice(5) as Entry[];

  const HumanDesignApproach = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
    );
  }).splice(0,3) as Entry[];

  return (
    <>
      <div className="flex justify-between items-center gap-4 py-8">
        <div className="flex flex-col justify-center align-center">
          <BasicTools basicToolsEntries={basicToolsEntries} />
          <div>
            <VerticalArrows />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-around items-center flex-col ">
            <HorizontalArrows />
          </div>
          <div className="">
            <div className="flex flex-wrap w-2/3">
              <TechnicalApproches approachEntries={technicalAproachEntries} />
            </div>
            <div className="flex">
              <MultidisciplinaryApproches
                approachEntries={multidisciplinaryEntries}
              />
            </div>
            <div>
              <ParticipatoryApproches
                approachEntries={participatoryApproachEntries}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="border-4 border-dashed border-gray-200">
          <YellowCard
            title="Behaviour Change Approaches"
            description="BCA’s look to understand and unlock the how, why, and when of energy system and service adoption from an end-user or individual perspective."
          />
          <div className="flex gap-4 px-3">
            <div>
              <BehaviorByPractice
                approachEntries={behaviorByPracticeApproach}
              />
            </div>
            <div>
              <BehaviorByTheory approachEntries={behaviorByTheoryApproach} />
            </div>
          </div>
        </div>
        <div>
          <HumanDesignApproches approachEntries={HumanDesignApproach} />
        </div>
      </div>
    </>
  );
};

export default ToolsResources;

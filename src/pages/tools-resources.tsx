import HorizontalArrows from "@/components/toolscomponents/HorizontalArrows";
import BasicTools from "@/components/toolscomponents/BasicTools";
import React from "react";
import VerticalArrows from "@/components/toolscomponents/VerticalArrows";
import Data from "../../public/output.json";
import { Entry } from "@/type/interface";
import TechnicalApproches from "@/components/toolscomponents/TechnicalApproach";
import ParticipatoryApproches from "@/components/toolscomponents/participatory/ParticipatoryByPracticeApproach";
import BehaviorByPractice from "@/components/toolscomponents/behavior/BehaviorByPractice";
import BehaviorByTheory from "@/components/toolscomponents/behavior/BehaviorByTheory";
import YellowCard from "@/components/cards/YellowCard";
import HumanDesignByPracticeApproach from "@/components/toolscomponents/humanDesign/HumanDesignByPracticeApproach";
import HumanDesignByTheoryApproach from "@/components/toolscomponents/humanDesign/HumanDesignByTheoryApproach";
import MultidiscilnaryByPracticeApproach from "@/components/toolscomponents/multidiscpliary/MultidiscilnaryByPracticeApproach";
import MultidiscilnaryByTheoryApproach from "@/components/toolscomponents/multidiscpliary/MultidisciplinaryByTheoryApproach";
import ParticipatoryByPracticeApproch from "@/components/toolscomponents/participatory/ParticipatoryByPracticeApproach";
import ParticipatoryByTheoryApproch from "@/components/toolscomponents/participatory/ParticipatoryByTheoryApproach";

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

  const multidisciplinaryByPracticeEntries = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
    );
  })
    .filter((entry) => {
      return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
    })
    .splice(0, 5) as Entry[];
  const multidisciplinaryByTheoryEntries = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: Multidisciplinary Approaches")
    );
  }).splice(6) as Entry[];

  const participatoryApproachEntries = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
    );
  }).splice(0, 4) as Entry[];
  const participatoryApproachEntries1 = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
    );
  })
    .filter((entry) => {
      return !entry.PARSED_MANUAL_TAGS.hasOwnProperty("CO_DESIGN_LEVEL");
    })
    .splice(5) as Entry[];

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

  const humanDesignByPracticeApproach = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
    );
  }).splice(0, 3) as Entry[];

  const humanDesignByTheoryApproach = Data.filter((entry) => {
    return (
      entry.Manual_Tags &&
      entry.Manual_Tags.includes("TOOLS: HCD & Design Thinking")
    );
  }).splice(3) as Entry[];

  return (
    <>
      <div className="flex justify-between items-center gap-4 py-8">
        <div className="flex flex-col justify-center align-center">
          <BasicTools basicToolsEntries={basicToolsEntries} />
          <div>
            <VerticalArrows />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-around items-center flex-col ">
            <HorizontalArrows />
          </div>
          <div className="">
            <div className="flex flex-wrap">
              <TechnicalApproches approachEntries={technicalAproachEntries} />
            </div>
            <div className="flex w-2/3">
              <div className="border-4 border-dotted border-gray-200 bg-gray-50">
                <YellowCard
                  title="Multidisciplinary Approaches"
                  description="Multidisciplinary approaches blend different disciplines to approach problems from multiple perspectives"
                />
                <div className="flex gap-2 px-2">
                  <div>
                    <MultidiscilnaryByPracticeApproach
                      approachEntries={multidisciplinaryByPracticeEntries}
                    />
                  </div>
                  <div>
                    <MultidiscilnaryByTheoryApproach
                      approachEntries={multidisciplinaryByTheoryEntries}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-2/3">
              <div className="border-4 border-dashed border-gray-200 bg-gray-50">
                <YellowCard
                  title="Participatory Approaches"
                  description="Participatory Approaches cover a wide range of qualitative research methods which look to include participants throughout project processes. These include phenomenological, photovoice, participatory workshops, mapping, and hanging out methods to name a few."
                />
                <div className="flex">
                  <div>
                    <ParticipatoryByPracticeApproch
                      approachEntries={participatoryApproachEntries}
                    />
                  </div>
                  <div>
                    <ParticipatoryByTheoryApproch
                      approachEntries={participatoryApproachEntries1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="border-4 border-dashed border-gray-200 bg-gray-50 w-1/2">
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
        <div className="flex w-1/3">
          <div className="border-4 border-dashed border-gray-200 bg-gray-50">
            <YellowCard
              title="Human-Centered Design & Design Thinking"
              description="Human-Centered Design & Design Thinking combine to produce a problem solving methodology which captures the wishes of a centralised user group and encourages significant ideation. "
            />
            <div className="flex">
              <div>
                <HumanDesignByPracticeApproach
                  approachEntries={humanDesignByPracticeApproach}
                />
              </div>
              <div>
                <HumanDesignByTheoryApproach
                  approachEntries={humanDesignByTheoryApproach}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsResources;

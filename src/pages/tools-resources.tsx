import HorizontalArrows from "../components/toolscomponents/arrows/HorizontalArrows";
import BasicTools from "../components/toolscomponents/BasicTools";
import React from "react";
import VerticalArrows from "../components/toolscomponents/arrows/VerticalArrows";
import TechnicalApproches from "../components/toolscomponents/TechnicalApproach";
import BehaviorByPractice from "../components/toolscomponents/behavior/BehaviorByPractice";
import BehaviorByTheory from "../components/toolscomponents/behavior/BehaviorByTheory";
import TitleCard from "../components/cards/TitleCard";
import HumanDesignByPracticeApproach from "../components/toolscomponents/humanDesign/HumanDesignByPracticeApproach";
import HumanDesignByTheoryApproach from "../components/toolscomponents/humanDesign/HumanDesignByTheoryApproach";
import MultidiscilnaryByTheoryApproach from "../components/toolscomponents/multidiscpliary/MultidisciplinaryByTheoryApproach";
import ParticipatoryByPracticeApproch from "../components/toolscomponents/participatory/ParticipatoryByPracticeApproach";
import ParticipatoryByTheoryApproch from "../components/toolscomponents/participatory/ParticipatoryByTheoryApproach";
import MultidiscilnaryByPracticeApproach from "../components/toolscomponents/multidiscpliary/MultidiscilnaryByPracticeApproach";
import {
  basicToolsEntries,
  technicalAproachEntries,
  multidisciplinaryByPracticeEntries,
  multidisciplinaryByTheoryEntries,
  participatoryApproachEntries,
  participatoryApproachEntries1,
  behaviorByPracticeApproach,
  behaviorByTheoryApproach,
  humanDesignByPracticeApproach,
  humanDesignByTheoryApproach,
} from "../utils/toolsEntries";

const ToolsResources = () => {
  return (
    <div className="py-6">
      <div className="flex justify-between items-center gap-10 p-8">
        <div className="flex flex-col px-8 -mt-28">
          <div className="h-fit m-10 ">
            <BasicTools basicToolsEntries={basicToolsEntries} />
          </div>
          <div>
            <VerticalArrows />
          </div>
        </div>
        <div className="flex justify-around gap-4 items-stretch">
          <div className="flex justify-around w-1/5 flex-col h-auto -mt-24">
            <HorizontalArrows />
          </div>
          <div className="w-4/5 h-2/3 mx-auto">
            <div>
              <TechnicalApproches approachEntries={technicalAproachEntries} />
            </div>

            <div className="border-4 border-dashed border-gray-400 bg-gray-50 py-4 px-2 rounded mt-24">
              <TitleCard
                title="Multidisciplinary Approaches"
                description="Multidisciplinary approaches blend different disciplines to approach problems from multiple perspectives"
              />
              <div className="grid grid-cols-3 h-2/3 p-4 gap-4">
                <div className="col-span-2">
                  <MultidiscilnaryByPracticeApproach
                    approachEntries={multidisciplinaryByPracticeEntries}
                  />
                </div>
                <div className="grid">
                  <MultidiscilnaryByTheoryApproach
                    approachEntries={multidisciplinaryByTheoryEntries}
                  />
                </div>
              </div>
            </div>

            <div className="pt-10">
              <div className="border-4 border-dashed border-gray-400 bg-gray-50 py-4 px-2 rounded w-2/3">
                <TitleCard
                  title="Participatory Approaches"
                  description="Participatory Approaches cover a wide range of qualitative research methods which look to include participants throughout project processes. These include phenomenological, photovoice, participatory workshops, mapping, and hanging out methods to name a few."
                />
                <div className="grid grid-cols-2 p-3 gap-4 h-1/3">
                  <div className="">
                    <ParticipatoryByPracticeApproch
                      approachEntries={participatoryApproachEntries}
                    />
                  </div>
                  <div className="p-2">
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
      <div className="flex gap-10 w-1/2 -mt-[28rem]">
        <div className="border-4 border-dashed border-gray-400 bg-gray-50 py-4 px-2 rounded">
          <TitleCard
            title="Behaviour Change Approaches"
            description="BCA’s look to understand and unlock the how, why, and when of energy system and service adoption from an end-user or individual perspective."
          />
          <div className="flex gap-3 p-4 h-fit">
            <div className="p-3">
              <BehaviorByPractice
                approachEntries={behaviorByPracticeApproach}
              />
            </div>
            <div className="p-3">
              <BehaviorByTheory approachEntries={behaviorByTheoryApproach} />
            </div>
          </div>
        </div>

        <div className="border-4 border-dashed border-gray-400 bg-gray-50 h-fit mt-20 py-4 px-2 rounded">
          <TitleCard
            title="Human-Centered Design & Design Thinking"
            description="Human-Centered Design & Design Thinking combine to produce a problem solving methodology which captures the wishes of a centralised user group and encourages significant ideation. "
          />
          <div className="grid grid-cols-2 gap-3 p-3 h-2/3">
            <div className="p-1">
              <HumanDesignByPracticeApproach
                approachEntries={humanDesignByPracticeApproach}
              />
            </div>
            <div className="grid p-1">
              <HumanDesignByTheoryApproach
                approachEntries={humanDesignByTheoryApproach}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsResources;

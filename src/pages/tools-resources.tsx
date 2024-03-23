import React from "react";
import TitleCard from "../components/cards/TitleCard";
import { titleEntries } from "../utils/titleEntries";
import {
  ParticipatoryByPracticeApproch,
  ParticipatoryByTheoryApproch,
  HumanDesignByPracticeApproach,
  HumanDesignByTheoryApproach,
  MultidiscilnaryByPracticeApproach,
  MultidiscilnaryByTheoryApproach,
  BehaviorByPractice,
  BehaviorByTheory,
  BasicTools,
  VerticalArrows,
  HorizontalArrows,
} from "../components/toolscomponents";

import {
  basicToolsEntries,
  technicalAproachEntries,
  multidisciplinaryByPracticeEntries,
  multidisciplinaryByTheoryEntries,
  behaviorByPracticeApproach,
  behaviorByTheoryApproach,
  humanDesignByPracticeApproach,
  humanDesignByTheoryApproach,
  participatoryByPracticeEntries,
  participatoryByTheoryEntries,
} from "../utils";

import TechnicalApproches from "@/components/toolscomponents/TechnicalApproach";

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
                title={titleEntries[0].title}
                description={titleEntries[0].description}
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
                  title={titleEntries[1].title}
                  description={titleEntries[1].description}
                />
                <div className="grid grid-cols-2 p-3 gap-4 h-1/3">
                  <div className="">
                    <ParticipatoryByPracticeApproch
                      approachEntries={participatoryByPracticeEntries}
                    />
                  </div>
                  <div className="p-2">
                    <ParticipatoryByTheoryApproch
                      approachEntries={participatoryByTheoryEntries}
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
            title={titleEntries[2].title}
            description={titleEntries[2].description}
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
            title={titleEntries[3].title}
            description={titleEntries[3].description}
          />
          <div className="grid grid-cols-2 gap-3 p-4 h-2/3">
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

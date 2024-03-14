import HorizontalArrows from "@/components/toolscomponents/HorizontalArrows";
import BasicTools from "@/components/toolscomponents/BasicTools";
import React from "react";
import VerticalArrows from "@/components/toolscomponents/VerticalArrows";
import RightApproches from "@/components/toolscomponents/RightApproches";
import DownApproches from "@/components/toolscomponents/DownApproches";
import Data from "../../public/output.json";
import { Entry } from "@/type/interface";

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
      entry.Manual_Tags && entry.Manual_Tags.includes(" TOOLS: Participatory Approaches")
    )
  }) as Entry[];

  return (
    <div>
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
              <RightApproches
               aproachEntries ={technicalAproachEntries}
              />
            </div>
            <div className="flex">
              <RightApproches
               aproachEntries ={multidisciplinaryEntries}
              />
            </div>
            <div>
              <RightApproches aproachEntries={participatoryApproachEntries}/>
            </div>
          </div>
        </div>
      </div>
      <div>
        <DownApproches />
      </div>
    </div>
  );
};

export default ToolsResources;

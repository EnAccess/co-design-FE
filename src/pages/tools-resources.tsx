import HorizontalArrows from "@/components/toolscomponents/HorizontalArrows";
import BasicTools from "@/components/toolscomponents/BasicTools";
import React from "react";
import VerticalArrows from "@/components/toolscomponents/VerticalArrows";
import RightApproches from "@/components/toolscomponents/RightApproches";
import DownApproches from "@/components/toolscomponents/DownApproches";

const ToolsResources = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4 py-8">
        <div className="w-full flex flex-col justify-center align-center">
          <BasicTools />
          <div>
            <VerticalArrows />
          </div>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-around items-center flex-col ">
            <HorizontalArrows />
          </div>
          <div className="flex justify-around items-center flex-col ">
            <RightApproches />
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

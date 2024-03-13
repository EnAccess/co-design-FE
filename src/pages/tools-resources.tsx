import BasicTools from "@/components/toolscomponents/BasicTools";
import React from "react";

const ToolsResources = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="w-full">
          <BasicTools />
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-around items-center flex-col ">
            <div>2i</div> <div>2ii</div> <div>3ii</div>
          </div>
          <div className="flex justify-around items-center flex-col ">
            3<div>3i</div> <div>3ii</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsResources;

import React from "react";
import Card from "../cards/StepCard";
import { uniqueFilteredData } from "@/data/co-design/filtered-data";

const JourneySection = () => {
  return (
    <div className="">
      <p className="text-center text-gray-500 text-xl font-bold mb-3 ">
        Select Step in The Co-design Journey
      </p>
      <div className="h-full flex items-center -my-8">
        <div className="">
          <div className="flex gap-3 items-center my-2">
            {uniqueFilteredData.map((data, index) => (
              <Card key={index} text={data} />
            ))}
          </div>
          <div className="m-2 p-3 bg-gray-400 text-white flex rounded-lg justify-around text-xl  items-center">
            <p className="text-md font-semibold">Early Concept</p>
            <p className="text-md font-semibold">{"->"}</p>
            <p className="text-md font-semibold">Software Development</p>
            <p className="text-md font-semibold">{"->"}</p>
            <p className="text-md font-semibold">Action and testing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;

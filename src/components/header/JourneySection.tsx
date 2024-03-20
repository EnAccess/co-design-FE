import React from "react";
import Card from "../cards/StepCard";
import ForwardArrow from "../icons/ForwardArrow";

const JourneySection = () => {
  return (
    <div className="">
      <p className="text-center text-gray-500 text-xl font-bold mb-3 ">
        Select Step in The Co-design Journey
      </p>
      <div className="h-full flex items-center -my-8">
        <div className="">
          <div className="flex justify-center items-center my-2">
            <Card text="Design" />
            <ForwardArrow />
            <Card text="Stakeholder Mapping" />
            <ForwardArrow />
            <Card text="Needs Assessment" />
            <ForwardArrow />
            <Card text="Implementation" />
            <ForwardArrow />
            <Card text="M&E" />
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

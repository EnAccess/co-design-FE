import React from "react";
import Card from "../cards/Step";
import ForwardArrow from "../icons/ForwardArrow";
import { useHighlightContext } from "@/context/highlight";
import { filteredJourneyData, steps } from "../../data/design-journey";

const JourneySection = () => {
  const { setTag: setHighlightedTag } = useHighlightContext();
  return (
    <div className="">
      <p className="text-center text-gray-500 text-xl font-bold mb-3 ">
        Select Step in The Co-design Journey
      </p>
      <div className="h-full flex items-center -my-8">
        <div>
          <div className="flex justify-center my-2">
            {filteredJourneyData.map((journey, index) => (
              <div key={index} className="flex items-center gap-2">
                <Card
                  text={journey}
                  onClick={() => {
                    setHighlightedTag("PROJECT STEP", journey);
                  }}
                />
                {index !== filteredJourneyData.length - 1 && <ForwardArrow />}
              </div>
            ))}
          </div>

          <div className="m-2 p-3 bg-gray-400 text-white flex rounded-lg justify-around text-xl  items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-center">
                <p className="text-md font-semibold">{step.description}</p>
                {index < steps.length - 1 ? (
                  <ForwardArrow color="#ffffff" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;

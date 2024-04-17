import React from "react";
import Card from "../cards/StepCard";
import ForwardArrow from "../icons/ForwardArrow";
import { data, filteredStepData } from "../../data/design-step/step-data";

const JourneySection = () => {
  return (
    <div>
      <p className="text-center text-gray-500 text-xl font-bold mb-3 ">
        Select Step in The Co-design Journey
      </p>
      <div className="h-full flex items-center -my-8">
        <div>
          <div className={"flex gap-1 items-center my-2"}>
            {filteredStepData.map((data, index) => (
              <>
                <Card key={index} text={data} />
                {index < filteredStepData.length - 1 && <ForwardArrow />}
              </>
            ))}
          </div>
          <div className="m-2 p-3 bg-gray-400 text-white flex rounded-lg justify-around text-xl  items-center">
            {data.map((item, index) => (
              <>
                <p className="text-md font-semibold " key={index}>
                  {item.description}
                </p>
                {index < data.length - 1 ? '->' : null}

              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;

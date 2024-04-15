import React from "react";
import ArrowDown from "./icons/ArrowDown";

interface Props {
  levels: string[];
  technologies: string[];
}

const buttonBlock = (entries: string[], title: string, style: string) => (
  <div>
    <h1 className="text-center text-gray-500 text-xl font-bold mb-3">
      {title}
    </h1>

    <div className="flex flex-col gap-2 p-4 h-72 overflow-y-auto">
      {entries.map((element, index) => (
        <button
          key={index}
          className={`border border-gray-500 p-4 rounded-lg ${style}`}
        >
          {element}
        </button>
      ))}
    </div>
  </div>
);

const HightlightCaseStudyDetails = ({ levels, technologies }: Props) => {
  return (
    <div className="flex items-center flex-col">
      <ArrowDown />
      <h1 className="text-center text-gray-500 text-xl font-bold mb-3 ">
        Hightlight Case Study Details
      </h1>
      <div className="bg-gray-200 rounded-2xl flex gap-2 py-4 px-8 border border-gray-500">
        <div className="p-4">
          <div>
            {buttonBlock(
              levels,
              "Case Study Implementation Level",
              "bg-black-900 text-white"
            )}
          </div>
        </div>
        <div className="p-4">
          {buttonBlock(
            technologies,
            "Case Study Technology",
            "bg-white text-black"
          )}
        </div>
      </div>
    </div>
  );
};

export default HightlightCaseStudyDetails;

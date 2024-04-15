import React from "react";
import ArrowDown from "./icons/ArrowDown";
import { Hightlights } from "@/data/case-studies";

interface Props {
  setElement: (element: string) => void;
}

const HightlightsBotton = (
  entries: string[],
  style: string,
  getCaseStudyDetails: (element: string) => void
) => (
  <div className="flex flex-col gap-2 p-4 h-72 overflow-y-auto">
    {entries.map((element, index) => (
      <button
        key={index}
        onClick={() => getCaseStudyDetails(element)}
        className={`border border-gray-500 p-4 rounded-lg ${style}`}
      >
        {element}
      </button>
    ))}
  </div>
);

const HightlightCaseStudyDetails = ({ setElement }: Props) => {
  const getCaseStudyDetails = (element: string) => {
    setElement(element);
  };
  return (
    <>
      {Hightlights.map((data, index) => (
        <div key={index} className="flex items-center flex-col">
          <ArrowDown />
          <h1 className="text-center text-gray-500 text-xl font-bold mb-3 ">
            {data.title}
          </h1>
          <div className="bg-gray-200 rounded-2xl flex gap-2 py-4 px-8 border border-gray-500">
            <div className="p-4 flex gap-6">
              {data.blocks.map((block, index) => (
                <div key={index} className="flex">
                  <div>
                    <h1 className="text-center text-gray-500 text-xl font-bold mb-3">
                      {block.title}
                    </h1>
                    {HightlightsBotton(
                      block.entries,
                      block.style,
                      getCaseStudyDetails
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HightlightCaseStudyDetails;

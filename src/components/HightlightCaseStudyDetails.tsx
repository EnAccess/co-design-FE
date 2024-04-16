import React from "react";
import ArrowDown from "./icons/ArrowDown";
import { Highlights } from "@/data/case-studies";

interface Props {
  setHighlightedElement: (element: string) => void;
}

const HighlightsBottons = (
  entries: string[],
  style: string,
  setHighlightedElement: (element: string) => void
) => (
  <div className="flex flex-col gap-2 p-4 h-72 overflow-y-auto">
    {entries.map((element, index) => (
      <button
        key={index}
        onClick={() => setHighlightedElement(element)}
        className={`border border-gray-500 p-4 rounded-lg ${style}`}
      >
        {element}
      </button>
    ))}
  </div>
);

const HighlightCaseStudyDetails = ({ setHighlightedElement }: Props) => {
  return (
    <>
      {Highlights.map((data, index) => (
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
                    {HighlightsBottons(
                      block.entries,
                      block.style,
                      setHighlightedElement
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

export default HighlightCaseStudyDetails;

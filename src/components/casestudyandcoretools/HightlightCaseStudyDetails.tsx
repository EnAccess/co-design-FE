import React from "react";
import ArrowDown from "../../components/icons/ArrowDown";

const caseStudyLevel = [
  "Household",
  "Community",
  "Policy/Systemic",
  "Productivity Use",
];
const caseStudyTechnology = [
  "Coding",
  "Lighting",
  "Hummanitarian Inflastructure",
];

const HightlightCaseStudyDetails = () => {
  return (
    <div className="flex items-center flex-col">
      <ArrowDown />
      <h1 className="text-center text-gray-500 text-xl font-bold mb-3 ">
        Hightlight case study details
      </h1>
      <div className="bg-gray-200 rounded-2xl flex gap-2 py-4 px-8 border border-gray-500">
        <div className="p-4">
          <h1 className="text-center text-gray-500 text-xl font-bold mb-3 ">
            Case study imprementation level
          </h1>
          <div>
            <div className="flex flex-col gap-2 p-4">
              {caseStudyLevel.map((el, index) => (
                <button
                  key={index}
                  className="border border-gray-500 p-4 bg-black text-white rounded-lg"
                >
                  {el}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-center text-gray-500 text-xl font-bold mb-3 ">
            Case study technology
          </h1>
          <div className="flex flex-col gap-2 p-4">
            {caseStudyTechnology.map((el, index) => (
              <button
                key={index}
                className="border border-gray-500 p-4 bg-gray-50 text-black rounded-lg"
              >
                {el}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HightlightCaseStudyDetails;

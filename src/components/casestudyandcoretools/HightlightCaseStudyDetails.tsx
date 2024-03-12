import React from "react";
import ArrowDown from "../../../public/images/ArrowDown";

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
            <div className="flex flex-col gap-2 px-4">
              <button className="border border-gray-500 p-4 bg-black text-white rounded-lg">
                Household
              </button>
              <button className="border border-gray-500 p-4 bg-black text-white rounded-lg">
                Community
              </button>
              <button className="border border-gray-500 p-4 bg-black text-white rounded-lg">
                Policy/Systemic
              </button>
              <button className="border border-gray-500 p-4 bg-black text-white rounded-lg">
                Productivity Use
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-center text-gray-500 text-xl font-bold mb-3 ">
            Case study technology
          </h1>
          <div className="flex flex-col gap-2 px-4">
            <button className="border border-gray-500 p-4 bg-gray-50 text-black rounded-lg">
              Coding
            </button>
            <button className="border border-gray-500 p-4 bg-gray-50 text-black rounded-lg">
              Lighting
            </button>
            <button className="border border-gray-500 p-4 bg-gray-50 text-black rounded-lg">
              Hummanitarian Inflastructure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HightlightCaseStudyDetails;

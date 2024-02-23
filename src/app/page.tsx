"use client"

import React, { useState } from "react";
import GroupedTools from "../components/GroupedTools";
import GroupedData from "../components/GroupedData";
import CoreToolkit from "../components/CoreToolkit";
import Icon from "../components/icons/icon";
import Line from "../components/icons/Line";


export default function Home() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section: any) => {
    setSelectedSection(section);
  };
  return (
    <div className="flex flex-col gap-20 items-center pt-20">
      <div className="items-center flex justify-between mx-auto max-w-[95rem]">
      <div className="border border-gray-500 rounded-2xl bg-gray-300 flex flex-col w-fit gap-5 px-10 py-5 shadow-2xl">
      <div
        className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-fit px-5 py-4 cursor-pointer ${
          selectedSection === "Basic Resources" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleSectionClick("Basic Resources")}
      >
        Basic Resources
      </div>
      <div
        className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-fit px-5 py-4 cursor-pointer ${
          selectedSection === "Advanced Resources" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleSectionClick("Advanced Resources")}
      >
        Advanced Resources
      </div>
      <div
        className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-fit px-5 py-4 cursor-pointer ${
          selectedSection === "Tools Resources" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleSectionClick("Tools Resources")}
      >
        Tools Resources
      </div>
      <div
        className={`rounded-xl border border-gray-500 bg-gray-400 font-semibold w-48 px-5 py-2 cursor-pointer ${
          selectedSection === "Case Studies & CORE Toolkits" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleSectionClick("Case Studies & CORE Toolkits")}
      >
        Case Studies & CORE Toolkits
      </div>
    </div>
        <div className="flex flex-col gap-10 w-2/3">

        <div className="grid grid-cols-4 items-end gap-10 w-full">
          <div className="flex items-center">
          <div className="bg-[#bae5fd75] rounded border boder-blue-400 p-2 flex flex-col items-center justify-center">
              <h3>Level 0</h3>
              <p className="text-center text-sm">Contextually Disconnected Design</p>
            </div>
          </div>
          <div className="flex items-center">
          <p className="text-center text-sm">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>
          </div>
          <div className="flex items-center">
          <div className="bg-[#fdbb7493] rounded border boder-blue-400 p-2.5 flex flex-col items-center justify-center">
              <h3>Level 0</h3>
              <p className="text-center text-sm">Contextually Disconnected Design</p>
            </div>
          </div>
          <div className="flex items-center">
          <p className="text-center text-sm">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>
          </div>
        </div>

        <div className="grid grid-cols-4 relative">
          <div className="flex justify-center ">
            <Line />
          </div>
          <div className="flex justify-center ">
            <Line />
          </div>
          <div className="flex justify-center ">
            <Line />
          </div>
          <div className="flex justify-center ">
            <Line />
          </div>

          <div className="h-[10px] w-full bg-[#dc2626] absolute top-1/2"></div>
        </div>

        <div className="grid grid-cols-4 items-start gap-10 w-full">
         
          <div className="flex items-center">
          <p className="text-center text-sm">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>
          </div>
          <div className="flex items-center">
          <div className="bg-[#bbf7d09c] rounded border boder-blue-400 p-2.5 flex flex-col items-center justify-center">
              <h3>Level 0</h3>
              <p className="text-center text-sm">Contextually Disconnected Design</p>
            </div>
          </div>
          
          <div className="flex items-center">
          <p className="text-center text-sm">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>
          </div>
          <div className="flex items-center">
          <div className="bg-[#c3b5fd54] rounded border boder-blue-400 p-2.5 flex flex-col items-center justify-center">
              <h3>Level 0</h3>
              <p className="text-center text-sm">Contextually Disconnected Design</p>
            </div>
          </div>
        </div>

       </div>
      </div>

      <div className="flex flex-col w-3/5 gap-2.5 ml-[-20rem] mt-10">
        <div className=" w-full items-center text-black font-bold grid grid-cols-3 gap-16">
          <div className="flex items-center w-fit ml-[10rem]">
            <div className="bg-pink-200 rounded-lg w-28 h-28 grid place-content-center">
              <p>Design</p>
            </div>
            <Icon name={undefined} className={undefined} />
          </div>

          <div className="flex items-center w-fit ">
            <div className="bg-pink-200 rounded-lg w-28 h-28 grid place-content-center">
              <p>test1</p>
            </div>
            <Icon name={undefined} className={undefined} />
            <div className="bg-pink-200 rounded-lg w-28 h-28 grid place-content-center">
              <p>test2</p>
            </div>
            <Icon name={undefined} className={undefined} />
          </div>

          <div className="flex items-center w-fit ">
            <div className="bg-pink-200 rounded-lg w-28 h-28 grid place-content-center">
              <p>Design</p>
            </div>
            <Icon name={undefined} className={undefined} />
            <div className="bg-pink-200 rounded-lg w-28 h-28 grid place-content-center">
            <p>Design</p>
          </div>
          </div>
        </div>
        <div className="pl-[10rem]">

        <div className="bg-gray-400 text-white font-bold py-2.5 rounded  justify-between grid grid-cols-5 ">
          <div className=" flex items-center pl-4">
          <p>Early Concept</p>
          </div>
          <div className="col-span-2  flex items-center justify-center">
          <p>Software Development</p>
          </div>
          <div className="flex justify-center col-span-2 items-center">
          <p>Action and testing</p>
          </div>
          
          
        </div>
        </div>
      </div>
      <div className="section-info">
        {selectedSection === "Basic Resources" && <GroupedData />}
        {selectedSection === "Advanced Resources" && <GroupedData />}
        {selectedSection === "Tools Resources" && <GroupedTools />}
        {selectedSection === "Case Studies & CORE Toolkits" && <CoreToolkit />}
      </div>
    </div>
  );
}


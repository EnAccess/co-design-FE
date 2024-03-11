import React, { useState } from "react";
import Line from "./icons/Line";
import Icon from "./icons/icon";
import Card from "./Card";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section: any) => {
    setSelectedSection(section);
  };
  return (
    <div
      className="flex justify-between items-center border-b-8 border-dashed p-8"
      style={{ width: 1900 }}
    >
      <div className="">
        <p className="text-center text-gray-500 text-sm mb-3">
          Select Type of Resources in The Co-Design Journey
        </p>
        <div className="border border-gray-500 rounded-2xl bg-gray-300 shadow-2xl p-4">
          <div className="flex justify-between mb-3">
            <Link
              href="/basic-resources"
              className={`flex items-center justify-center rounded-lg border border-gray-500 bg-gray-400 font-semibold text-xs min-h-10 w-40 place-contetext-center cursor-pointer ${selectedSection === "Basic Resources"
                ? "bg-black text-white"
                : ""
                }`}
              onClick={() => handleSectionClick("Basic Resources")}
            >
              Basic Resources
            </Link>
            <Link
              href=""
              className={`flex items-center justify-center ml-3 rounded-lg border border-gray-500 bg-gray-400 font-semibold text-xs min-h-10 w-40 text-center cursor-pointer ${selectedSection === "Advanced Resources"
                ? "bg-black text-white"
                : ""
                }`}
              onClick={() => handleSectionClick("Advanced Resources")}
            >
              Advanced Resources
            </Link>
          </div>

          <div className="flex justify-between">
            <Link
              href="/tools-resources"
              className={`flex items-center justify-center rounded-lg border border-gray-500 bg-gray-400 font-semibold text-xs min-h-10 w-40 text-center cursor-pointer ${selectedSection === "Tools Resources"
                ? "bg-black text-white"
                : ""
                }`}
              onClick={() => handleSectionClick("Tools Resources")}
            >
              Tools Resources
            </Link>
            <Link
              href="/case-studies-and-core-tools"
              className={`flex items-center justify-center rounded-lg border border-gray-500 bg-gray-400 font-semibold text-xs min-h-10 w-40 text-center cursor-pointer ${selectedSection === "Case Studies & CORE Toolkits"
                ? "bg-black text-white"
                : ""
                }`}
              onClick={() => handleSectionClick("Case Studies & CORE Toolkits")}
            >
              Case Studies & CORE Toolkits
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/images/smallArrow.png"
        alt="arrow"
        width={100}
        height={100}
      />

      <div className="min-h-80">
        <p className="text-center text-gray-500 text-sm mb-3">
          Select Level of Co-design Practice
        </p>
        <div className="">
          <div className="">
            <div className="flex justify-center items-end w-fit">
              <div className="bg-[#bae5fd75] rounded border boder-blue-400 flex flex-col items-center justify-center h-16">
                <p className="text-center text-xs">Level 0</p>
                <p className="text-center text-xs">
                  Contextually Disconnected Design
                </p>
              </div>
              <p className="text-center text-xs max-w-48">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>

              <div className="bg-[#fdbb7493] rounded border boder-blue-400 p-2.5 flex flex-col items-center justify-center h-16">
                <p className="text-center text-xs">Level 0</p>
                <p className="text-center text-xs">
                  Contextually Disconnected Design
                </p>
              </div>

              <p className="text-center text-xs max-w-48">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>
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
            <Image
              src="/images/bigArrow.png"
              alt="arrow"
              width={900}
              height={100}
            />
            <div className="flex justify-center items-start w-fit">
              <p className="text-center text-xs max-w-48">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>
              <div className="bg-[#bae5fd75] rounded border boder-blue-400 p-2 flex flex-col items-center justify-center h-16">
                <p className="text-center text-xs">Level 0</p>
                <p className="text-center text-xs">
                  Contextually Disconnected Design
                </p>
              </div>

              <p className="text-center text-xs max-w-48">
                These methods result in desgin without a current contextual
                understanding of the comminutity, designing systems that
                reinforce cultural tropes and knowledge hierarchies, or in short
                desgin, for a theoretically imagined community.
              </p>

              <div className="bg-[#fdbb7493] rounded border boder-blue-400 p-2.5 flex flex-col items-center justify-center h-16">
                <p className="text-center text-xs">Level 0</p>
                <p className="text-center text-xs">
                  Contextually Disconnected Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/smallArrow.png"
        alt="arrow"
        width={100}
        height={100}
      />
      <div className="min-h-80">
        <p className="text-center text-gray-500 text-sm mb-3">
          Select Step in The Co-design Journey
        </p>
        <div className="flex justify-center items-center">
          <Card text="Design" />
          <Icon />
          <Card text="Stakeholder Mapping" />
          <Icon />
          <Card text="Needs Assessment" />
          <Icon />
          <Card text="Implementation" />
          <Icon />
          <Card text="M&E" />
        </div>

        <div className="mt-6 bg-gray-400 text-white flex justify-around  items-center min-h-10">
          <p className="text-sm">Early Concept</p>
          <p className="text-sm">to</p>
          <p className="text-sm">Software Development</p>
          <p className="text-sm">to</p>
          <p className="text-sm">Action and testing</p>
        </div>
      </div>
    </div>
  );
};

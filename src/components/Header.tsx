"use client";
import React from "react";
import Line from "./icons/Line";
import Icon from "./icons/icon";
import Card from "./cards/StepCard";
import Image from "next/image";
import ResourceType from "./cards/ResourceTypeCard";
import LevelCard from "./cards/LevelCard";

export const Header = () => {
  return (
    <div
      className="flex flex-wrap justify-between items-center  gap-y-24 border-b-8 border-dashed px-8 mx-auto"
      // style={{ width: 1900 }}
    >
      <div className="">
        <p className="text-center text-gray-500 text-xl font-bold mb-3">
          Select Type of Resources in The Co-Design Journey
        </p>
        <div className="bg-[#e6e6e6] border-2 border-black grid grid-cols-2 gap-8 rounded-2xl shadow-2xl p-4 mx-auto">
          {[
            {
              text: "Basic Resources",
              link: "/basic-resources",
            },
            {
              text: "Advanced Resources",
              link: "/",
            },
            {
              text: "Tools Resources",
              link: "/tools-resources",
            },
            {
              text: "Case Studies & CORE Toolkits",
              link: "/case-studies-and-core-tools",
            },
          ].map((item) => (
            <ResourceType key={item.text} text={item.text} link={item.link} />
          ))}
        </div>
      </div>

      <Image
        src="/images/smallArrow.png"
        alt="arrow"
        width={100}
        height={100}
      />

      <div className="">
        <p className="text-center text-gray-500 text-xl font-bold mb-3">
          Select Level of Co-design Practice
        </p>
        <div>
          <div className="flex justify-center items-end w-fit gap-x-4">
            <LevelCard
              level={0}
              title="Level 0"
              description="Contextually Disconnected Design"
            />
            <p className="text-center text-xs max-w-48">
              The minimum co-design method where community members or
              individuals are consulted as customers on their needs, aspirations
              and desires, including working within the existing socio-cultural,
              environmental, and financial systems of focus communities. Often
              involves designing for or on behalf of communities
            </p>
            <LevelCard
              level={2}
              title="Level 2"
              description="Current Best Practice"
            />

            <p className="text-center text-xs max-w-48">
              Engaging in transformational knowledge exchanges that are led by
              affected and at risk individuals and communities in order to
              dismantle existing power structures that constrain co-design
              processes
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
          <div className="flex justify-between items-start w-fit- gap-x-4-">
            <p className="text-center text-xs max-w-48">
              These methods result in design without a current contextual
              understanding of the community, designing systems that reinforce
              cultural tropes and knowledge hierarchies, or in short design, for
              a theoretically imagined community.
            </p>
            <LevelCard
              level={1}
              title="Level 1"
              description="Basic Principle"
            />
            <p className="text-center text-xs max-w-48">
              Level 2 is where the methods of co-design work towards
              inclusivity, understand FDPs as agents of change through
              mobilising local resources and existing community-based structures
              to support HE projects
            </p>
            <LevelCard
              level={3}
              title="Level 3"
              description="Fighting the System"
            />
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
        <p className="text-center text-gray-500 text-xl font-bold mb-3 ">
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
          <p className="text-sm">{"->"}</p>
          <p className="text-sm">Software Development</p>
          <p className="text-sm">{"->"}</p>
          <p className="text-sm">Action and testing</p>
        </div>
      </div>
    </div>
  );
};

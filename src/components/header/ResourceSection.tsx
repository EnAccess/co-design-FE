import React, { memo } from "react";
import ResourceTypeCard from "../cards/ResourceType";
import { NavLink } from "../../types/interfaces";
interface Props {
  navData: NavLink[];
}
const ResourceSection = ({ navData }: Props) => {
  return (
    <div className="">
      <p className="text-center text-gray-500 text-xl font-bold mb-3">
        Select Type of Resources in The Co-Design Journey
      </p>
      <div className="h-full flex -mt-8">
        <div className="bg-[#e6e6e6] border-2 border-gray-500 grid grid-cols-2 gap-8 rounded-2xl shadow-2xl p-10 m-auto">
          {navData.map((item) => (
            <ResourceTypeCard
              key={item.text}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ResourceSection);

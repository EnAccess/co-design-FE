import React, { useRef } from "react";
import { Entries } from "@/types/interfaces";
import InformationCards from "./InformationCards";

interface Props {
  Entries: Entries;
  title: string;
  description: string;
}

const TitleCard = ({ title, description, Entries }: Props) => {
  const gridContainerRef = useRef<any>(null);

  console.log(Entries);

  return (
    <div>
      <div
        ref={gridContainerRef}
        className="p-8 col-span-2 h-full  bg-gray-100 border-2 border-dashed border-gray-400"
      >
        <div className="bg-yellow-200 flex justify-center px-5 py-5 w-4/5">
          <h3 className="text-2xl font-semibold w-1/3">{title}</h3>
          <p className="text-sm w-1/2 text-center">{description}</p>
        </div>

        <div className="m-auto">
          <InformationCards Data={Entries} />
        </div>
      </div>
    </div>
  );
};

export default TitleCard;

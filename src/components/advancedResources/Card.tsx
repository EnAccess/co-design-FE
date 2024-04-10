import { getRandomColor } from "@/utils/helpers";
import React, { useRef } from "react";
import { ArcherContainer } from "react-archer";
import InformationCards from "../cards/InformationCards";
import { Entries, Entry } from "@/types/interfaces";
import HeaderCArd from "../cards/HeaderCArd";

interface Props {
  Entries: any;
  title: string;
}

const Card = ({ Entries }: Props) => {
  const gridContainerRef = useRef<any>(null);
  console.log("first", Entries);
  return (
    <div>
      <div
        ref={gridContainerRef}
        className="p-8 col-span-2 h-full  bg-gray-100 border-2 border-dashed border-gray-400"
      >
        <HeaderCArd title={Entries.title} description={Entries.description} />
        <div className="flex justify-center flex-wrap gap-2">
          <div className="flex justify-around flex-wrap py-10">
            <div className="w-52 m-4">
              <InformationCards Data={Entries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { getRandomColor } from "@/utils/helpers";
import React, { useRef } from "react";
import { ArcherContainer } from "react-archer";
import InformationCards from "../cards/InformationCards";
import { Entries, Entry } from "@/types/interfaces";
import HeaderCArd from "../cards/HeaderCArd";

interface Props {
  Entries: Entries;
  title: string;
}

const Card = ({ Entries, title }: Props) => {
  const gridContainerRef = useRef<any>(null);
  return (
    <div>
      <div
        ref={gridContainerRef}
        className="p-8 col-span-2 h-full w- bg-gray-100 border-2 border-dashed border-gray-400"
      >
        <HeaderCArd title={title} description={Entries[0].Title} />
        <div className="m-auto">
          <InformationCards Data={Entries} />
        </div>
      </div>
    </div>
  );
};

export default Card;

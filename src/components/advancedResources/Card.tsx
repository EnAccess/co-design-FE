import React, { useRef } from "react";
import InformationCards from "../cards/InformationCards";
import HeaderCArd from "../cards/HeaderCArd";

interface Props {
  Entries: any;
}

const Card = ({ Entries }: Props) => {
  const { title, description, entries } = Entries;
  const gridContainerRef = useRef<any>(null);
  return (
    <div>
      <div
        ref={gridContainerRef}
        className="p-8 col-span-2 h-full bg-gray-100 border-2 border-dashed border-gray-400"
      >
        <HeaderCArd title={title} description={description} />
        <div className="m-auto">
          <InformationCards Data={entries} />
        </div>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import InformationCards from "./cards/InformationCards";
import HeaderCard from "./cards/Header";

interface Props {
  Entries: any;
}

const Card = ({ Entries }: Props) => {
  const { title, description, colSpan, rowSpan, entries } = Entries;
  return (
    <div className={`col-span-${colSpan} row-span-${rowSpan}`}>
      <div className="p-8 col-span-2 h-full  bg-gray-100 border-2 border-dashed border-gray-400">
        <div>
          <HeaderCard title={title} description={description} />
          <div className="m-auto">
            <InformationCards Data={entries} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

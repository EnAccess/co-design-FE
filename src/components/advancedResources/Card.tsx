import React from "react";
import InformationCards from "../cards/InformationCards";
import HeaderCArd from "../cards/HeaderCArd";

interface Props {
  Entries: any;
}

const Card = ({ Entries }: Props) => {
  const { title, description, entries, colSpan, rowSpan } = Entries;
  return (
    <div className={`col-span-${colSpan} row-span-${rowSpan}`}>
      <div className="p-8 col-span- h-full bg-gray-100 border-2 border-dashed border-gray-400">
        <HeaderCArd title={title} description={description} />
        <div className="m-auto">
          <InformationCards Data={entries} />
        </div>
      </div>
    </div>
  );
};

export default Card;

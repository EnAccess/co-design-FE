import React from "react";
import InformationCards from "../cards/InformationCards";
import HeaderCArd from "../cards/HeaderCArd";

interface Props {
  Entries: any;
}

const Card = ({ Entries }: Props) => {
  const { title, description, entries, colSpan, rowSpan, heightMultiplier } =
    Entries;
  console.log({ heightMultiplier });
  return (
    <div
      className={`col-span-${colSpan} row-span-${rowSpan} p-8 bg-gray-100 border-2 border-dashed border-gray-400`}
    >
      <HeaderCArd title={title} description={description} />
      <div className="m-auto">
        <InformationCards Data={entries} heightMultiplier={heightMultiplier} />
      </div>
    </div>
  );
};

export default Card;

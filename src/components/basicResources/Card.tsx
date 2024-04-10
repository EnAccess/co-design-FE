import React from "react";
import TitleCard from "../cards/TitleCard";

interface Props {
  Entries: any;
}

const Card = ({ Entries }: Props) => {
  const { title, description, colSpan, rowSpan } = Entries;
  return (
    <div className={`col-span-${colSpan} row-span-${rowSpan}`}>
      <div className="p-8 col-span- h-full bg-gray-100 border-2 border-dashed border-gray-400">
        <TitleCard title={title} description={description} Entries={[]} />
        {/* <div className="m-auto">
          <InformationCards Data={entries} />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
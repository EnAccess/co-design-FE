import React from "react";
import CardCanvas from "./cards/CardCanvas";
import Header from "./cards/Header";
import { Entries } from "@/types/interfaces";

interface Props {
  title: string;
  description: string;
  entries: Entries;
  colSpan: number;
  rowSpan: number;
  blockHeight: number;
}

const Block = ({
  title,
  description,
  entries,
  colSpan,
  rowSpan,
  blockHeight,
}: Props) => {
  return (
    <div
      className={`col-span-${colSpan} row-span-${rowSpan} p-8 bg-gray-100 border-2 border-dashed border-gray-400`}
    >
      <Header title={title} description={description} />
      <div className="m-auto">
        <CardCanvas Data={entries} blockHeight={blockHeight} />
      </div>
    </div>
  );
};

export default Block;
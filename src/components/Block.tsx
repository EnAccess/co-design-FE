import React, { useMemo } from "react";
import CardCanvas from "./cards/Canvas";
import Header from "./cards/Header";
import { Entries } from "@/types/interfaces";

const MAX_COL_SPAN = 3;
const MIN_COL_SPAN = 2;

interface Props {
  title: string;
  description?: string;
  entries: Entries;
  singleBlock?: boolean;
}
const Block = ({
  title,
  description,
  entries,
}: Props) => {
  const colSpan = useMemo(() => {
    if (entries?.length >= 24) return 8
    if (entries?.length >= 18) return 7
    return entries?.length > MAX_COL_SPAN ? MAX_COL_SPAN : MIN_COL_SPAN
  }, [entries])
  const rowSpan = useMemo(() => Math.ceil(entries?.length / colSpan), [entries, colSpan])
  const blockHeight = useMemo(() => Math.ceil(rowSpan / MAX_COL_SPAN), [rowSpan])
  return (
    <div
      className={`col-span-${colSpan} row-span-${rowSpan} p-8 bg-gray-100 border-2 border-dashed border-gray-400 `}
    >
      <Header title={title} description={description} />
      <div className="m-auto">
        <CardCanvas data={entries} blockHeight={blockHeight} columns={colSpan} />
      </div>
    </div>
  );
};

export default Block;

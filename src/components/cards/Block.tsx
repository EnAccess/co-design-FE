import React, { useMemo } from "react";
import CardCanvas from "../Canvas";
import Header from "./Header";
import { Entries } from "@/types/interfaces";
import { useFilter } from "@/hooks/useFilter";

const MAX_COL_SPAN = 3;
const MIN_COL_SPAN = 2;

interface Props {
  title: string;
  description?: string;
  entries: Entries;
  minifiedHeader?: boolean;
}
const BlockCard = ({ data, children }: any) => {
  return (
    <div
      className={` `}
    >
      <Header
        title={data.label}
        description={data.description}
      // minified={minifiedHeader}
      />
      <div className="m-auto">
        {children}
      </div>
    </div>
  );
};

export default BlockCard;

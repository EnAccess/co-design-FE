import { useMemo } from "react";
import { Group } from "../../types/interfaces";
import Block from "./Block";
import { generateBlock, parseBlockData, parseBlocks, parseEdges } from "@/utils/canvas";
import CardCanvas from "../Canvas";

const GroupCard = ({ data, children }: any) => {
  return (
    <>
      <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
        {data.label != "NO GROUP" && data.label}
      </h3>
    </>
  );
};

export default GroupCard;

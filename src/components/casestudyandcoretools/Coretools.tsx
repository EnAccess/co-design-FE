import { Entries } from "@/types/interfaces";
import React from "react";
interface Props {
  categorizedEntries: { leve1: Entries; leve2: Entries; leve3: Entries };
}
const Coretools = ({ categorizedEntries }: Props) => {
  return (
    <div>
      <div className="flex p-4 gap-4 flex-wrap">
        <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
        <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
        <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
      </div>
      <div className="flex p-4 gap-4 flex-wrap">
        <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
        <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
        <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
        <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
      </div>
      <div className="flex p-4 gap-4 flex-wrap">
        <div className="p-4 bg-[#d5e8d4]">karera olivier</div>
        <div className="p-4 bg-[#d5e8d4]">karera olivier</div>
        <div className="p-4 bg-[#d5e8d4]">karera olivier</div>
      </div>
    </div>
  );
};

export default Coretools;

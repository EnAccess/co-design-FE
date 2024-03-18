import React from "react";
import LongArrow from "../icons/LongArrow";
import SmallArrow from "../icons/SmallArrow";

const HorzontalArrows = () => {
  return (
    <div>
      <div className="flex flex-col gap-32 mr-24">
        <div className="-rotate-[132deg]">
          <LongArrow />
        </div>
        <div className="-rotate-90">
          <SmallArrow />
        </div>
        <div className="-rotate-45">
          <LongArrow />
        </div>
      </div>
    </div>
  );
};

export default HorzontalArrows;

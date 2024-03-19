import React from "react";
import LongArrow from "../icons/LongArrow";
import SmallArrow from "../icons/SmallArrow";

const HorzontalArrows = () => {
  return (
      <div className="flex px-10 flex-col items-start">
        <div className="-rotate-[125deg] pt-20">
          <LongArrow />
        </div>
        <div className="-rotate-90 my-60">
          <SmallArrow />
        </div>
        <div className="-rotate-45">
          <LongArrow />
        </div>
      </div>
  );
};

export default HorzontalArrows;

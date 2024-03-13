import React from "react";
import ArrowDown from "../icons/ArrowDown";

const HorzontalArrows = () => {
  return (
    <div>
      <div className="flex flex-col justify-around">
        <div className="-rotate-[135deg]">
          <ArrowDown />
        </div>
        <div className="-rotate-90">
          <ArrowDown />
        </div>
        <div className="-rotate-45">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default HorzontalArrows;

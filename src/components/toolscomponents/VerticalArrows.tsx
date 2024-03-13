import React from "react";
import ArrowDown from "../icons/ArrowDown";

const VerticalArrows = () => {
  return (
    <div>
      <div className="flex justify-around">
        <ArrowDown />
        <div className="-rotate-45">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default VerticalArrows;

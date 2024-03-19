import React from "react";
import SmallArrow from "../icons/SmallArrow";
import LongArrow from "../icons/LongArrow";

const VerticalArrows = () => {
  return (
    <div className="flex justify-around mt-20">
      <SmallArrow />
      <div className="-rotate-5">
        <LongArrow />
      </div>
    </div>
  );
};

export default VerticalArrows;

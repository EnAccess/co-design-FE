import classNames from "classnames";
import React from "react";

const LevelCard = ({
  level,
  title,
  description,
}: {
  level: number;
  title: string;
  description: string;
}) => {
  const bgColor = classNames({
    "bg-[#dae8fc] border-[#6c8ebf]": level == 0,
    "bg-[#d5e8d4] border-[#82b366]": level == 1,
    "bg-[#ffe6cc] border-[#d79b00]": level == 2,
    "bg-[#e1d5e7] border-[#9673a6]": level == 3,
  });
  return (
    <button
      className={`${bgColor} rounded-lg border w-48 flex flex-col items-center justify-center h-16 cursor-pointer`}
    >
      <p className="text-center text-base font-semibold">{title}</p>
      <p className="text-center text-xs font-medium">{description}</p>
    </button>
  );
};

export default LevelCard;

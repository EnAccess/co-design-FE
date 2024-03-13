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
    "bg-level-primary-0 border-level-secondary-0": level == 0,
    "bg-level-primary-1 border-level-secondary-1": level == 1,
    "bg-level-primary-2 border-level-secondary-2": level == 2,
    "bg-level-primary-3 border-level-secondary-3": level == 3,
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

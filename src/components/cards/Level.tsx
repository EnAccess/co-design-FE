import { useAppContext } from "@/context/provider";
import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface Props {
  level: string;
  title: string;
  description: string;
}
const LevelCard = ({ level, title, description }: Props) => {
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const { selectedLevels, setSelectedLevels } = useAppContext();
  useEffect(() => {
    if (!selectedLevel) return;
    setSelectedLevels((prev: string[]) => {
      if (!prev || !Array.isArray(prev)) {
        prev = [];
      }
      const hasLevel = prev.includes(selectedLevel);
      return hasLevel
        ? prev.filter((level: string) => level !== selectedLevel)
        : [...prev, selectedLevel];
    });
    setSelectedLevel("");
  }, [selectedLevel]);

  const bgColor = classNames({
    "bg-level-primary-0 border-level-secondary-0": level == "0",
    "bg-level-primary-1 border-level-secondary-1": level == "1",
    "bg-level-primary-2 border-level-secondary-2": level == "2",
    "bg-level-primary-3 border-level-secondary-3": level == "3",
  });
  return (
    <div className="flex justify-center">
      <button
        onClick={() => setSelectedLevel(level)}
        className={`${
          selectedLevels.includes(level)
            ? "bg-white border-2 border-black-900"
            : bgColor
        } rounded-lg border w-44 flex flex-col items-center justify-center h-16 cursor-pointer`}
      >
        <p className="text-center text-base font-semibold">{title}</p>
        <p className="text-center text-xs font-medium">{description}</p>
      </button>
    </div>
  );
};

export default LevelCard;

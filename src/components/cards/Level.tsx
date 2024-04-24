import { useFilterContext } from "@/context/filter";
import { getBgColorClassName } from "@/utils/nodes";
import classNames from "classnames";
import { useMemo } from "react";

interface Props {
  level: string;
  title: string;
  attribute: string;
  description: string;
}
const LevelCard = ({ level, title, attribute, description }: Props) => {
  const { addFilter: addFilteredTag, filterValues } = useFilterContext();

  const className = useMemo(() => {
    const bgColor = getBgColorClassName(level);
    const isSelected =
      filterValues && filterValues.some((item: any) => item.value === level);
    return `${
      isSelected ? "bg-white border-2 border-black-900" : bgColor
    } rounded-lg border w-44 flex flex-col items-center justify-center h-16 cursor-pointer`;
  }, [level, filterValues]);

  return (
    <div className="flex justify-center">
      <button
        onClick={() => addFilteredTag(attribute, level)}
        className={className}
      >
        <p className="text-center text-base font-semibold">{title}</p>
        <p className="text-center text-xs font-medium">{description}</p>
      </button>
    </div>
  );
};

export default LevelCard;

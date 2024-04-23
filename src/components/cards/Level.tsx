import { useFilterContext } from "@/context/filter";
import classNames from "classnames";

interface Props {
  level: string;
  title: string;
  attribute: string;
  description: string;
}
const LevelCard = ({ level, title, attribute, description }: Props) => {
  const { addFilter: addFilteredTag, filterValues } = useFilterContext();

  const bgColor = classNames({
    "bg-level-primary-0 border-level-secondary-0": level == "0",
    "bg-level-primary-1 border-level-secondary-1": level == "1",
    "bg-level-primary-2 border-level-secondary-2": level == "2",
    "bg-level-primary-3 border-level-secondary-3": level == "3",
  });
  const isFiltered =
    filterValues && filterValues.some((item: any) => item.value === level);
  return (
    <div className="flex justify-center">
      <button
        onClick={() => addFilteredTag(attribute, level)}
        className={`${
          isFiltered ? "bg-white border-2 border-black-900" : bgColor
        } rounded-lg border w-44 flex flex-col items-center justify-center h-16 cursor-pointer`}
      >
        <p className="text-center text-base font-semibold">{title}</p>
        <p className="text-center text-xs font-medium">{description}</p>
      </button>
    </div>
  );
};

export default LevelCard;

import Data from "../../../public/output.json";
import { Entries } from "../../types/interfaces";
import Card from "./Card";
const AdvancedResourcesCard = ({ themes, filteredData }: any) => {
  return (
    <div className="p-4 flex gap-4 text-sm">
      {Object.entries(themes).map(([theme, key]) => (
        <Card
          key={`${theme}-${key}`}
          Entries={filteredData[theme]}
          title={theme}
        />
      ))}
    </div>
  );
};

export default AdvancedResourcesCard;

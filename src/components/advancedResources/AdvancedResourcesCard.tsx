import ResourcesCard from "../ResourcesCard";
const AdvancedResourcesCard = ({ themes, filteredData }: any) => {
  return (
    <div className="p-4 grid grid-cols-12 justify-center gap-3 text-sm">
      {Object.entries(themes).map(([theme, key]) => (
        <ResourcesCard key={`${theme}-${key}`} Entries={filteredData[theme]} />
      ))}
    </div>
  );
};

export default AdvancedResourcesCard;

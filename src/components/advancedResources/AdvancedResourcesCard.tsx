import Card from "./Card";
const AdvancedResourcesCard = ({ themes, filteredData }: any) => {
  return (
    <div className="p-4 grid grid-cols-12 justify-center- gap-4 text-sm">
      {Object.entries(themes).map(([theme, key]) => (
        <Card key={`${theme}-${key}`} Entries={filteredData[theme]} />
      ))}
    </div>
  );
};

export default AdvancedResourcesCard;

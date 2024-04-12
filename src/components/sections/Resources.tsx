import Block from "../Block";
const ResourcesSection = ({ themes, filteredData }: any) => {
  return (
    <div className="p-4 grid grid-cols-12 justify-center gap-3 text-sm">
      {Object.entries(themes).map(([theme, key]) => {
        const items = filteredData[theme];
        return (
          <Block
            key={`${theme}-${key}`}
            title={theme}
            description={items.description}
            entries={items.entries}
            colSpan={items.colSpan}
            rowSpan={items.rowSpan}
            blockHeight={items.blockHeight}
          />
        );
      })}
    </div>
  );
};

export default ResourcesSection;

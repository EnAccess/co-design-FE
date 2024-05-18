import Header from "./Header";

const BlockCard = ({ data, children }: any) => {
  return (
    <div>
      <Header title={data.label} description={data.description} />
      <div className="m-auto">{children}</div>
    </div>
  );
};

export default BlockCard;

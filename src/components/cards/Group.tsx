const GroupCard = ({ data, children }: any) => {
  return (
    <>
      <h3 className="text-gray-600 font-semibold text-center text-2xl my-10 py-10">
        {data.label != "NO GROUP" && data.label}
      </h3>
      <div className="pt-20">{children}</div>
    </>
  );
};

export default GroupCard;

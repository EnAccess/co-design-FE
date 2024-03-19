interface Props {
  title: string;
  description: string;
  className?: string;
}

const TitleCard = ({
  title,
  description,
  className = "",
}: Props) => {
  return (
    <>
      <div
        className={`bg-[#ffff66] flex justify-between px-5 py-5 ${className}`}
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-sm w-3/4 text-center">{description}</p>
      </div>
    </>
  );
};

export default TitleCard;

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
        className={`bg-[rgb(250,250,131)] flex justify-between p-5 ${className}`}
      >
        <h3 className="text-4xl text-gray-700 font-bold">{title}</h3>
        <p className="text-lg text-gray-700 w-3/4 text-center font-serif">{description}</p>
      </div>
    </>
  );
};

export default TitleCard;

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
          className={`bg-[rgb(250,250,131)] flex justify-between px-5 py-5 ${className}`}
        >
          <h3 className="text-3xl text-gray-700 font-bold">{title}</h3>
          <p className="text-base w-3/4 text-center font-serif">{description}</p>
        </div>
      </>
    );
  };
  
  export default TitleCard;
  
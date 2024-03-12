interface YellowCardProps {
    title: string;
    description: string;
  
}

const YellowCard = ({ title, description }: YellowCardProps) => {
    return (
      <div>
        <div className="bg-yellow-200 flex justify-between px-5 py-5 w-4/5">
          <h3 className="text-2xl font-semibold w-1/3">{title}</h3>
          <p className="text-sm w-1/2- text-center">{description}</p>
        </div>
      </div>
    );
  };
  
  export default YellowCard;
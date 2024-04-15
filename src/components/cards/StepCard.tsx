import React from "react";

const StepCard = ({ text }: { text: string }) => {
  return (
    <button className="h-32 w-36 bg-[#f8cecc] border rounded-md border-[#b85450] hover:border-purple-500 cursor-pointer flex justify-center items-center">
      <p className="text-lg text-center font-bold  leading-tight">{text}</p>
    </button>
  );
};

export default StepCard;

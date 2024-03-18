import React from "react";

const StepCard = ({ text }: { text: string }) => {
  return (
    <button className="h-28 w-32 bg-[#f8cecc] border rounded-md border-[#b85450] hover:border-purple-500 cursor-pointer flex justify-center items-center">
      <p className="text-xs text-center">{text}</p>
    </button>
  );
};

export default StepCard;

import { useAppContext } from "../../context/app";
import { useEffect, useState } from "react";

const StepCard = ({ text }: { text: string }) => {

  const { setHighlightedNodes } = useAppContext();
  const [step, setStep] = useState<string>("");

  useEffect(() => {
    setHighlightedNodes({ attribute: "PROJECT STEP", value: step });
  },[step])

  return (
    <button
      onClick={() => setStep(text)}
      className="h-32 w-36 bg-[#f8cecc] border rounded-lg border-[#b85450] hover:border-2 hover:border-purple-500 cursor-pointer flex justify-center items-center"
    >
      <p className="text-lg text-center font-bold  leading-tight">{text}</p>
    </button>
  );
};

export default StepCard;

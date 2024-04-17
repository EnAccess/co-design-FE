import { getEntryKeys } from "../../utils/helpers";
import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "../../contex";


const StepCard = ({ text }: { text: string }) => {
  const [step, setStep] = useState<string>('');
  const { setEntryKeys } = useAppContext();
  const getEntryKeysArray = useMemo(() => getEntryKeys(step), [step]);

  useEffect(() => {
    setEntryKeys(getEntryKeysArray);
    setStep('')
  }, [getEntryKeysArray]);
  return (
    <button
      onClick={() => setStep(text)}
      className="h-32 w-36 bg-[#f8cecc] border rounded-md border-[#b85450] hover:border-purple-500 cursor-pointer flex justify-center items-center"
    >
      <p className="text-lg text-center font-bold  leading-tight">{text}</p>
    </button>
  );
};

export default StepCard;

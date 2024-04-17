import { getEntryKeys } from "@/utils/helpers";
import React, { useEffect, useMemo, useState } from "react";
import { useAppContext } from "@/contex";
const StepCard = ({ text }: { text: string }) => {
  const [journey, setJourney] = useState<string>('');
  const { setEntryKeys } = useAppContext();
  const getEntryKeysArray = useMemo(() => getEntryKeys(journey), [journey]);
  useEffect(() => {
    setEntryKeys(getEntryKeysArray);
    setJourney('')
  }, [getEntryKeysArray]);
  return (
    <button
      onClick={() => setJourney(text)}
      className="h-32 w-36 bg-[#f8cecc] border rounded-md border-[#b85450] hover:border-purple-500 cursor-pointer flex justify-center items-center"
    >
      <p className="text-lg text-center font-bold  leading-tight">{text}</p>
    </button>
  );
};

export default StepCard;

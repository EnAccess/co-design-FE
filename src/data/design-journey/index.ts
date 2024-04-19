import output from "../../../public/data.json";
import { stepData } from "./step-data";

const journeyData = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.["PROJECT STEP"])
  .flat()
  .filter((data) => data !== null);

export const filteredJourneyData = Array.from(new Set(journeyData));


export const steps = Object.values(stepData).map((step) => {
  return {
    description: step.description,
  };
});
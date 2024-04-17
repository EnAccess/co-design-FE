import output from "../../../public/data.json";
import { steps } from "./steps";

const stepData = output
  .map((data) => data?.PARSED_MANUAL_TAGS?.["PROJECT STEP"])
  .flat()
  .filter((data) => data !== null);

export const filteredStepData = [...new Set(stepData)];

export const data = Object.values(steps).map((step) => {
  return {
    description: step.description,
  };
});

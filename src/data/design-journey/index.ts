import { stepData } from "./step-data";

export const journeyData = [
  "Design",
  "Stakeholder Mapping",
  "Needs Assessment",
  "Implementation",
  "M&E",
];


export const steps = Object.values(stepData).map((step) => {
  return {
    description: step.description,
  };
});

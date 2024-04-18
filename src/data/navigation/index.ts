import { levels } from "./levels";
import { practice } from "./navigationData";

const practiceLevels = practice.map((level, index) => ({
  ...level,
  level: levels[index],
}));

export default practiceLevels;

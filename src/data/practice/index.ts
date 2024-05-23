import { levelsData } from "../levels-data";

const practiceLevels = levelsData.map((level, index) => ({
  ...level,
  level: String(index),
}));

export default practiceLevels;

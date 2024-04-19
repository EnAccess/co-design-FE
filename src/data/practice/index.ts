import { levels } from "./levels";
import { levelsData } from "./levels-data";

const practiceLevels = levelsData.map((level, index) => ({
  ...level,
  level: levels[index],
}));

export default practiceLevels;

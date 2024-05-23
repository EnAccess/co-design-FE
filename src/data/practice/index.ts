import { getLevels } from "./levels";
import { levelsData } from "../levels-data";

export const getPracticeLevel = async () => {
  const levels = await getLevels();
  const level = levelsData.map((level, index) => {
    return {
      ...level,
      level: levels[index],
    };
  });
  return level;
};

import { getLevels } from "./levels";
import { levelsData } from "../levels-data";

export const getPracticeLevel = () => {
  return levelsData.map(async (level, index) => {
    const levels = await getLevels();
    return {
      ...level,
      level: levels[index],
    };
  });
};

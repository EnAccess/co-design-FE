import output from "../../../public/data.json";

const rawLevels = output.map((data) => data?.PARSED_MANUAL_TAGS['CASE STUDY LEVEL']).flat().filter((theme) => theme) as string[]

export const levels = Array.from(new Set(rawLevels));

import output from "../../../public/data.json";

const rawTechnlogies = output.map((data) => data?.PARSED_MANUAL_TAGS['CASE STUDY TECH']).flat().filter((theme) => theme) as string[]

export const technlogies = Array.from(new Set(rawTechnlogies));

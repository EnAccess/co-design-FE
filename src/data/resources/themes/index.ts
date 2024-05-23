import { generateDataJson } from "@/utils/generate-output-json";
import themeData from "./theme-data";

export async function getThemes() {
  const output = await generateDataJson();
  const rawthemes = output
    .map((data: any) => data?.PARSED_MANUAL_TAGS?.THEME)
    .flat()
    .filter((theme: any) => theme) as string[];

  const themes = Array.from(new Set(rawthemes))
    .map((theme) => {
      const data = themeData[theme.toUpperCase()];
      const entries = output.filter((entry: any) =>
        entry?.PARSED_MANUAL_TAGS?.THEME?.includes(theme)
      );
      return {
        title: theme,
        description: data?.description || null,
        group: data?.group || "NO GROUP",
        entries,
      };
    })
    .sort((a, b) => b.entries.length - a.entries.length);
  return themes;
}

import themeData from "./theme-data";
const url = `${process.env.DEVELOPMENT_URL}/api/get-output-json`;
export async function getThemes() {
  const res = await fetch(url);
  const output = await res.json();
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

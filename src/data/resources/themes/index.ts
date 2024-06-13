import output from "@/data/zotero";
import themeData from "./theme-data";

const rawthemes = output.map((data) => data?.PARSED_MANUAL_TAGS?.THEME).flat().filter((theme) => theme) as string[]

export const themes = Array.from(new Set(rawthemes)).map((theme: string) => {
    const data = themeData[theme.toUpperCase()];
    const entries = output.filter((entry) => entry?.PARSED_MANUAL_TAGS?.THEME?.includes(theme));
    return {
        title: theme,
        description: data?.description || null,
        group: data?.group || "NO GROUP",
        entries,
    }
}).sort((a, b) => b.entries.length - a.entries.length);

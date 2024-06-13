import classNames from "classnames";

export function getColorByAccess(accessType: string) {
  switch (accessType) {
    case "Institutional Access":
      return "#FFFF33"; // Yellow
    case "Open Source":
      return "#33FF33"; // green
    case "Paid Service":
      return "#FF3333"; // Red
    default:
      return "transparent";
  }
}

export const getLevel = (data: any) => {
  const coDesignLevel = data.PARSED_MANUAL_TAGS?.["CO-DESIGN LEVEL"];
  if (Array.isArray(coDesignLevel)) return coDesignLevel[0];
  return coDesignLevel;
};

export const getBgColorClassName = (level: any) => {
  switch (level) {
    case "0":
      return classNames("bg-level-primary-0 border-level-secondary-0");
    case "1":
      return classNames("bg-level-primary-1 border-level-secondary-1");
    case "2":
      return classNames("bg-level-primary-2 border-level-secondary-2");
    case "3":
      return classNames("bg-level-primary-3 border-level-secondary-3");
    default:
      return classNames(
        "bg-level-primary-default border-level-secondary-default"
      );
  }
};

import classNames from "classnames";

export const getBgColorClassName = (data: any) => {
  const level = Number(
    Array.isArray(data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL)
      ? data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL[0]
      : data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL
  );

  switch (level) {
    case 0:
      return classNames("bg-level-primary-0 border-level-secondary-0");
    case 1:
      return classNames("bg-level-primary-1 border-level-secondary-1");
    case 2:
      return classNames("bg-level-primary-2 border-level-secondary-2");
    case 3:
      return classNames("bg-level-primary-3 border-level-secondary-3");
    default:
      return classNames(
        "bg-level-primary-default border-level-secondary-default"
      );
  }
};

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

export const checkHighlightedNodes = (
  entry: any,
  attribute: any,
  value: any
) => {
  const attributeValues = entry?.PARSED_MANUAL_TAGS?.[attribute];
  return Array.isArray(attributeValues) && attributeValues.includes(value);
};

export const getAnchorPosition = (start: any, end: any) => {
  if (!start && !end) {
    return;
  }
  const calculate = (position: number) => {
    const numRows = Math.floor(position / 2);
    const numCols = position % 2;
    return { x: numCols, y: numRows };
  };
  // Calculate the centers of the source and target cards
  const calculateCenter = ({
    section: { x: sx, y: sy },
    row: sr,
    column: sc,
  }: any) => {
    return { x: sx * 2 + sc - 0.5, y: sy * 2 + sr + 0.5 };
  };

  const sourceCenter = calculateCenter({
    section: calculate(start?.section),
    row: start?.row,
    column: start?.column,
  });
  const targetCenter = calculateCenter({
    section: calculate(end?.section),
    row: end?.row,
    column: end?.column,
  });

  // Calculate the distance between the centers of the cards
  const distanceX = Math.abs(targetCenter.x - sourceCenter.x);
  const distanceY = Math.abs(targetCenter.y - sourceCenter.y);

  // Determine the sides of the source and target cards
  let sourceSide, targetSide;
  if (distanceX > distanceY) {
    if (targetCenter.x > sourceCenter.x) {
      sourceSide = "right";
      targetSide = "left";
    } else {
      sourceSide = "left";
      targetSide = "right";
    }
  } else {
    if (targetCenter.y >= sourceCenter.y) {
      sourceSide = "bottom";
      targetSide = "top";
    } else {
      sourceSide = "top";
      targetSide = "bottom";
    }
  }

  return [sourceSide, targetSide];
};

export const getRandomColor = () => {
  // Generate random values for red, green, and blue
  var r = Math.floor(Math.random() * 256); // Random value between 0 and 255
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Convert decimal to hexadecimal
  var hexR = r.toString(16).padStart(2, "0"); // Convert to hexadecimal and ensure at least two digits
  var hexG = g.toString(16).padStart(2, "0");
  var hexB = b.toString(16).padStart(2, "0");

  // Concatenate the hex values
  var hexColor = "#" + hexR + hexG + hexB;

  return hexColor;
};

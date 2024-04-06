export const getAnchorPosition = (start: any, end: any) => {
  console.log({ start, end });
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

// export const generateRandomPosition = () => ({
//   x: Math.random() * 800,
//   y: Math.random() * 600,
// });

// const generateInitialPositions = (
//   numItems: any,
//   containerWidth: any,
//   containerHeight: any
// ) => {
//   const positions = [];
//   const horizontalSpacing = 350; // Adjust horizontal spacing between nodes
//   const verticalSpacing = 200; // Adjust vertical spacing between nodes

//   const maxItemsPerRow = Math.floor(containerWidth / horizontalSpacing);
//   const numRows = Math.ceil(numItems / maxItemsPerRow);

//   let index = 0;
//   for (let row = 0; row < numRows; row++) {
//     const y = (row + 1) * (containerHeight / (numRows + 1));
//     const itemsInRow = Math.min(numItems - index, maxItemsPerRow);
//     const rowWidth = itemsInRow * horizontalSpacing;
//     const startX = (containerWidth - rowWidth) / 2;

//     for (let col = 0; col < itemsInRow; col++) {
//       const x = startX + col * horizontalSpacing;
//       positions.push({ x, y });
//       index++;
//     }
//   }

//   return positions;
// };

export const generateInitialPositions = (
  numItems: any,
  containerWidth: any,
  containerHeight: any
) => {
  const positions = [];
  const horizontalSpacing = 150;
  const verticalSpacing = 200;

  const maxItemsPerRow = Math.floor(containerWidth / horizontalSpacing);
  const numRows = Math.ceil(numItems / maxItemsPerRow);
  const maxItemsLastRow =
    numItems % maxItemsPerRow === 0
      ? maxItemsPerRow
      : numItems % maxItemsPerRow;

  let index = 0;
  for (let row = 0; row < numRows; row++) {
    const y = (row + 1) * verticalSpacing;
    const itemsInRow = row === numRows - 1 ? maxItemsLastRow : maxItemsPerRow;
    const rowWidth = itemsInRow * horizontalSpacing;
    const startX = (containerWidth - rowWidth) / 2;

    for (let col = 0; col < itemsInRow; col++) {
      const x = startX + col * horizontalSpacing;
      positions.push({ x, y });
      index++;
    }
  }

  return positions;
};

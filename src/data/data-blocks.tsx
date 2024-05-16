import Header from "@/components/cards/Header";
import { v4 as uuidv4 } from "uuid";
import themeData from "./resources/themes/theme-data";
const CONTAINER_HEIGHT = 800;
const CONTAINER_WIDTH = 2800;
const SINGLE_BLOCK_WIDTH = 3300;
// export const nodeBlocks = [
//   {
//     id: "2a",
//     data: {
//       label: <Header title="karera" description="karera" />,
//     },
//     position: { x: 10, y: 50 },
//     style: {
//       backgroundColor: "rgba(255, 0, 0, 0.2)",
//       borderStyle: "dashed",
//       borderColor: "#cbd5e0",
//       borderWidth: "4px",
//       width: SINGLE_BLOCK_WIDTH / 3,
//       height: CONTAINER_HEIGHT,
//     },
//   },
//   {
//     id: "2b",
//     data: {
//       label: <Header title="karera" description="karera" minified={false} />,
//     },
//     position: { x: 1130, y: 50 },
//     style: {
//       backgroundColor: "#f3f4f6",
//       borderStyle: "dashed",
//       borderColor: "#cbd5e0",
//       borderWidth: "4px",
//       width: SINGLE_BLOCK_WIDTH / 3,
//       height: CONTAINER_HEIGHT,
//     },
//   },
//   {
//     id: "2c",
//     data: {
//       label: <Header title="karera" description="karera" />,
//     },
//     position: { x: 2250, y: 50 },
//     style: {
//       backgroundColor: "rgba(255, 0, 0, 0.2)",
//       borderStyle: "dashed",
//       borderColor: "#cbd5e0",
//       borderWidth: "4px",
//       width: SINGLE_BLOCK_WIDTH / 3,
//       height: CONTAINER_HEIGHT,
//     },
//   },
//   {
//     id: "2d",
//     data: {
//       label: <Header title="karera" description="karera" />,
//     },
//     position: { x: 10, y: 900 },
//     style: {
//       backgroundColor: "rgba(255, 0, 0, 0.2)",
//       borderStyle: "dashed",
//       borderColor: "#cbd5e0",
//       borderWidth: "4px",
//       width: SINGLE_BLOCK_WIDTH / 3,
//       height: CONTAINER_HEIGHT,
//     },
//   },
//   {
//     id: "2e",
//     data: {
//       label: <Header title="karera" description="karera" minified={false} />,
//     },
//     position: { x: 1130, y: 900 },
//     style: {
//       backgroundColor: "#f3f4f6",
//       borderStyle: "dashed",
//       borderColor: "#cbd5e0",
//       borderWidth: "4px",
//       width: SINGLE_BLOCK_WIDTH / 3,
//       height: CONTAINER_HEIGHT,
//     },
//   },
//   {
//     id: "2f",
//     data: {
//       label: <Header title="karera" description="karera" />,
//     },
//     position: { x: 2250, y: 900 },
//     style: {
//       backgroundColor: "#f3f4f6",
//       backgroundOpacity: 0.2,
//       borderStyle: "dashed",
//       borderColor: "#cbd5e0",
//       borderWidth: "4px",
//       width: SINGLE_BLOCK_WIDTH / 3,
//       height: CONTAINER_HEIGHT,
//     },
//   },
// ];

function generateId(length: any) {
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function createNodeBlocks(themeData: any) {
  const nodeBlocks: any = [];
  let x = 10;
  let y = 50;
  const columnWidth = 1120;
  const rowHeight = 850;
  Object.entries(themeData).forEach(([key, value]: any) => {
    const id = uuidv4();
    const label = (
      <Header
        key={Math.floor(Math.random() * 10)}
        title={key}
        description={value.description}
        minified={false}
      />
    );
    const position = { x, y };
    const style = {
      backgroundColor: "#f3f4f6",
      borderStyle: "dashed",
      borderColor: "#cbd5e0",
      borderWidth: "4px",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    };
    // const type = "group";

    nodeBlocks.push({ id, data: { label }, position, style });

    x += columnWidth;
    if (x >= 2251) {
      x = 10;
      y += rowHeight;
    }
  });

  return nodeBlocks;
}

const nodeBlocks = createNodeBlocks(themeData);
export { nodeBlocks };

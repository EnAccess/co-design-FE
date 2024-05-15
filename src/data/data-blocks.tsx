import Header from "@/components/cards/Header";
const CONTAINER_HEIGHT = 800;
const CONTAINER_WIDTH = 2800;
const SINGLE_BLOCK_WIDTH = 3300;
export const nodeBlocks = [
  {
    id: "2a",
    data: {
      label: <Header title="karera" description="karera" />,
    },
    position: { x: 10, y: 50 },
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    },
  },
  {
    id: "2b",
    data: {
      label: <Header title="karera" description="karera" minified={false} />,
    },
    position: { x: 1130, y: 50 },
    style: {
      backgroundColor: "#f3f4f6",
      borderStyle: "dashed",
      borderColor: "#cbd5e0",
      borderWidth: "4px",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    },
  },
  {
    id: "2c",
    data: {
      label: <Header title="karera" description="karera" />,
    },
    position: { x: 2250, y: 50 },
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    },
  },
  {
    id: "2d",
    data: {
      label: <Header title="karera" description="karera" />,
    },
    position: { x: 10, y: 900 },
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    },
  },
  {
    id: "2e",
    data: {
      label: <Header title="karera" description="karera" minified={false} />,
    },
    position: { x: 1130, y: 900 },
    style: {
      backgroundColor: "#f3f4f6",
      borderStyle: "dashed",
      borderColor: "#cbd5e0",
      borderWidth: "4px",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    },
  },
  {
    id: "2f",
    data: {
      label: <Header title="karera" description="karera" />,
    },
    position: { x: 2250, y: 900 },
    style: {
      backgroundColor: "rgba(255, 0, 0, 0.2)",
      width: SINGLE_BLOCK_WIDTH / 3,
      height: CONTAINER_HEIGHT,
    },
  },
];

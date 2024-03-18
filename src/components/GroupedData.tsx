import React, { useEffect, useState, useRef } from "react";
import { ArcherContainer } from "react-archer";
import InformationCard from "./cards/InformationCard";
import { Entry } from "@/types/interfaces";
import { getRandomColor } from "@/utils/helpers";
import Data from "./../../public/output.json";

function GroupedData() {
  const [data, setData] = useState([]);
  const [positions, setPositions] = useState<any>({});
  const gridContainerRef = useRef<any>(null);

  const getData = () => {
    const sortedData: any = Data.filter(
      (i: any) => i.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL
    ).toSorted((a: any, b: any) => {
      const levelA = Array.isArray(a.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL)
        ? a.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL[0]
        : a.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
      const levelB = Array.isArray(b.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL)
        ? b.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL[0]
        : b.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
      return Number(levelB) - Number(levelA);
    });

    setData(sortedData);
  };

  useEffect(() => {
    getData();
  }, []);

  const getAllThemes = data
    .map((item: any) => item.PARSED_MANUAL_TAGS.THEME)
    .flat();
  const uniqueThemes = Array.from(new Set(getAllThemes.filter((v) => v)));

  const calculatePositions = () => {
    const cardList = gridContainerRef.current?.children || [];
    Array.from(cardList).forEach((key: any, index) => {
      const elements = Array.from(key.children[1].children[0].children);
      if (!elements) return;
      elements.forEach((element: any, elementIndex) => {
        const section = elementIndex;
        Array.from(element.children[1].children).forEach(
          (data: any, dataIndex) => {
            const gridColumn = (dataIndex % 2) + 1;
            const gridRow = Math.floor(dataIndex / 2) + 1;
            setPositions((prevPosition: any) => {
              if (!prevPosition[element.id]) {
                return {
                  ...prevPosition,
                  [element.id]: {
                    [data.id]: {
                      section,
                      row: gridRow,
                      column: gridColumn,
                    },
                  },
                };
              }
              return {
                ...prevPosition,
                [element.id]: {
                  ...prevPosition[element.id],
                  [data.id]: {
                    section,
                    row: gridRow,
                    column: gridColumn,
                  },
                },
              };
            });
          }
        );
      });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      calculatePositions();
    }, 2000);

    const handleWindowResize = () => {
      calculatePositions();
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="mt-10">
      <h3 className="text-gray-600 font-semibold text-center text-2xl">
        Core concept of collaborative Design Process
      </h3>

      <div
        ref={gridContainerRef}
        className="grid grid-cols-1 gap-5  p-20 w-full"
      >
        <ArcherContainer
          strokeDasharray="."
          noCurves
          strokeColor={getRandomColor()}
        >
          <div className="grid grid-cols-2 gap-10">
            {uniqueThemes.map((themItem, index) => {
              return (
                <div
                  key={themItem}
                  id={themItem}
                  className="bg-gray-100 border border-dashed p-5"
                >
                  <div className="bg-yellow-200 flex justify-between px-5 py-5 w-4/5">
                    <h3 className="text-2xl font-semibold w-1/3-">
                      {themItem}
                    </h3>
                    <p className="text-sm w-1/2- text-center">
                      Engaging with entire systems approaches requires
                      humanitarian practitioners to challenge and rethink how to
                      interact with humanitarian systems that surround them.
                      This outlines what needs to change and how.
                    </p>
                  </div>
                  <div className=" m-5 grid grid-cols-2 gap-x-64 gap-y-20 py-10">
                    {data.map((data: Entry) => {
                      if (
                        data.PARSED_MANUAL_TAGS.THEME === themItem ||
                        data.PARSED_MANUAL_TAGS.THEME?.includes(themItem)
                      ) {
                        return <InformationCard key={data.Key} data={data} />;
                      }
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </ArcherContainer>
      </div>
    </section>
  );
}

export default GroupedData;

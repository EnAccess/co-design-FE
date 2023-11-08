import React, { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import csvtojson from 'csvtojson';

function GroupedData() {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const csvFilePath = './data.csv';
    async function fetchData() {

      try {
        const response = await fetch(csvFilePath);
        const csvData = await response.text();

        // Parse CSV to JSON
        const jsonArray = csvData.split('\n').map((line) => {
          const [Key, Title, Author] = line.split(',');
          return {
            Key,
            Title,
            Author,
          };
        });

        setJsonData(jsonArray);
        console.log("Json data", jsonData)

      } catch (error) {
        console.error('Error fetching or parsing CSV:', error);
      }
    }

    fetchData();
  }, []);

  const getData = () => {
    fetch("./output.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const getAllThemes = data
    .map((item, index) => item.PARSED_MANUAL_TAGS.THEME)
    .flat();
  const uniqueThemes = Array.from(new Set(getAllThemes.filter((v) => v)));

  return (
    <section className="mt-10">
      <h3 className="text-gray-600 font-semibold text-center text-2xl">
        Core concept of collaborative Design Process
      </h3>

      <div className="grid grid-cols-2 gap-5 p-20 w-full">
        <ArcherContainer strokeColor="gray">
          {uniqueThemes.map((item, index) => {
            return (
              <div key={index}>
                {item}

                <div className="bg-gray-100 border border-dashed p-5 grid grid-cols-3 gap-20">
                  {data.map((itemdata, dataIndex) => {
                    if (itemdata.PARSED_MANUAL_TAGS.THEME === item) {
                      const level = itemdata.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
                      const backgroundColorClass = `bg-${
                        level == 1
                          ? "red-500"
                          : level == 2
                          ? "blue-500"
                          : level == 3
                          ? "green-500"
                          : "gray-500"
                      }`;

                      return (
                        <div
                          key={dataIndex}
                          className={`border border-dashed py-4 px-2 relative ${backgroundColorClass}`}
                          onMouseEnter={() => setHoveredIndex(dataIndex)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        >
                          {itemdata.Title}
                          <p>CO_DESIGN_LEVEL: {level} </p>

                          {hoveredIndex === dataIndex && (
                            <div className="absolute bg-white border p-4 mt-2 z-10">
                              <p>Extra: {itemdata.Extra}</p>
                              <p>{itemdata.Manual_Tags}</p>
                            </div>
                          )}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </ArcherContainer>
      </div>
    </section>
  );
}

export default GroupedData;

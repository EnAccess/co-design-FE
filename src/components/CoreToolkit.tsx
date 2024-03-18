"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";

function CoreToolkit() {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getData = () => {
    fetch("./output.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        setData(data);
      });

    console.log("dataaaa", data);
  };

  useEffect(() => {
    getData();
  }, []);

  const getAllThemes = data
    .map((item, index) => item.PARSED_MANUAL_TAGS.CORE_TOOLKIT)
    .flat();
  const uniqueThemes = Array.from(new Set(getAllThemes.filter((v) => v)));
  console.log("uniqueThemes", uniqueThemes);

  const coDesignLevelColors = {
    1: "bg-red-500",
    2: "bg-blue-500",
    3: "bg-green-500",
  };

  const handleFilter = (level) => {
    setFilterLevel(level);
  };

  return (
    <section>
      <div className="grid grid-cols-2 gap-5 p-20 w-full">
        {uniqueThemes.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames({
                "bg-gray-100- border border-dashed p-5 flex flex-col gap-3 bg-gray-100 ":
                  true,
                "col-span-3 bg-red-500": index === 5,
              })}
              // className={`bg-gray-100- border border-dashed ${
              //   index === 0 ? "bg-red-500" : index===1 ? "bg-blue-500" : index===2 ? "bg-green-500" : ""
              // }`}
            >
              {item}

              {data.map((itemdata, dataIndex) => {
                if (itemdata.PARSED_MANUAL_TAGS.CORE_TOOLKIT === item) {
                  return (
                    <div
                      key={dataIndex}
                      className="border border-dashed py-4 px-2 relative"
                      onMouseEnter={() => setHoveredIndex(dataIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {itemdata.Title}
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
          );
        })}
      </div>
    </section>
  );
}

export default CoreToolkit;

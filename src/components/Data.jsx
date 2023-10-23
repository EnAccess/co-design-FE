import React, { useEffect, useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };
function Data() {
  const [data, setData] = useState([]);
  const [filterLevel, setFilterLevel] = useState(null);

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
      <div className="flex gap-5 justify-center">
        <button
          onClick={() => handleFilter(null)}
          className="px-4 py-3 rounded-md text-white font-semibold bg-gray-500">
          All
        </button>
        <button
          onClick={() => handleFilter("1")}
          className="rounded-md bg-red-500 text-white font-semibold px-4 py-3">
          Co-Design Level 1
        </button>
        <button
          onClick={() => handleFilter("2")}
          className="rounded-md bg-blue-500 text-white font-semibold px-4 py-3">
          Co-Design Level 2
        </button>
        <button
          onClick={() => handleFilter("3")}
          className="rounded-md bg-green-500 text-white font-semibold px-4 py-3">
          Co-Design Level 3
        </button>
      </div>
      <ArcherContainer className="flex flex-row gap-5 p-20 w-full">
        <div className="flex flex-wrap gap-[10px]">
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <>
                <div key={index} style={rootStyle}>
                  <ArcherElement
                    id={item.Key}
                    key={index}
                    style
                    relations={[
                      {
                        targetId: item.PARSED_RELATES_TO[0],
                        targetAnchor: "middle",
                        sourceAnchor: "right",
                        style: { strokeDasharray: "5,5" },
                      },
                    ]}>
                    <div
                      className={`shadow-xl border border-gray-100 font-bold rounded-full grid place-content-center h-44 w-44 ${
                        coDesignLevelColors[
                          item?.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL
                        ] || ""
                      } ${
                        filterLevel !== null &&
                        item?.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL !==
                          filterLevel
                          ? "hidden"
                          : ""
                      }`}>
                      <p>{item.Key}</p>
                      <p>{item?.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL}</p>
                    </div>
                  </ArcherElement>
                </div>
              </>
            ))}
        </div>
      </ArcherContainer>
    </section>
  );
}

export default Data;

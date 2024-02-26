"use client";

import { useEffect, useState } from "react";
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

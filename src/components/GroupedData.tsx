"use client";

import React, { useEffect, useState } from "react";
import Xarrow, { Xwrapper } from "react-xarrows";
import { useRef } from "react";

function GroupedData() {
  const [data, setData] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const relationship = useRef([]);

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

    console.log("dataaaaa", data.ACCESS);
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

      <div className="grid grid-cols-1 gap-5  p-20 w-full">
        {uniqueThemes.map((item, index) => {
          return (
            <div key={index} className="bg-gray-100 border border-dashed">
              <div className="bg-yellow-200 flex justify-between px-5 py-5 w-4/5">
                <h3 className="text-2xl font-semibold w-1/3">{item}</h3>
                <p className="text-sm w-1/2 text-center">
                  Engaging with entire systems approaches requires humanitarian
                  practitioners to challenge and rethink how to interact with
                  humanitarian systems that surround them. This outlines what
                  needs to change and how.
                </p>
              </div>
              <div className=" p-5 grid grid-cols-3 gap-20">
                {data.map((itemdata, dataIndex) => {
                  const relation = {
                    id: itemdata.Key,
                    relatedTo: itemdata.PARSED_RELATES_TO,
                  };
                  relationship.current.push(relation);
                  if (itemdata.PARSED_MANUAL_TAGS.THEME === item) {
                    const level = itemdata.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
                    const backgroundColorClass = `bg-${
                      level == 0
                        ? "[#bae5fd75]"
                        : level == 1
                        ? "[#bbf7d09c]"
                        : level == 2
                        ? "[#fdbb7493]"
                        : level == 3
                        ? "[#c3b5fd54]"
                        : "gray-500"
                    }`;

                    return (
                      <div
                        key={dataIndex}
                        className={`border border-dashed py-4 px-2 text-sm relative rounded-md  ${backgroundColorClass}`}
                        onMouseEnter={() => setHoveredIndex(dataIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        id={itemdata.Key}
                      >
                        {itemdata.Title}
                        {itemdata.PARSED_MANUAL_TAGS.ACCESS ===
                        "Institutional Access" ? (
                          <div className="absolute -bottom-5 -right-5">
                            {" "}
                            <svg
                              width="50px"
                              height="50px"
                              viewBox="0 0 24 24"
                              fill="#fde047"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                                stroke="#000000"
                                strokeWidth="1"
                                stroke-linecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>{" "}
                          </div>
                        ) : (
                          ""
                        )}

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
      </div>
      <Xwrapper>
        {relationship.current.map((relation) => {
          return relation.relatedTo.map((to, index) => {
            return <Xarrow start={`${relation.id}`} end={`${to}`} />;
          });
        })}
      </Xwrapper>
    </section>
  );
}

export default GroupedData;

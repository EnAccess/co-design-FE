import React, { useEffect, useState } from "react";
const rootStyle = { display: "flex", justifyContent: "center" };
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };
function GroupedData() {
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
  const getAllthem = data
    .map((item, index) => item.PARSED_MANUAL_TAGS.THEME)
    .flat();
  const newSetData = new Set(getAllthem.filter((v) => v));
  console.log("newSetData", [...newSetData]);
  const coDesignLevelColors = {
    1: "bg-red-500",
    2: "bg-blue-500",
    3: "bg-green-500",
  };

  const themeArray = Array.from(newSetData);
  console.log(themeArray, ".......................");
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
      <div className="grid grid-cols-4 gap-5 p-20 w-full">
        {themeArray.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`bg-gray-100 border border-dashed ${
                  index === 0 ? "bg-red-500" : ""
                }`}>
                {item}
              </div>
              {data.map((itemdata, index) => {
                if (
                  //   item.PARSED_MANUAL_TAGS.THEME?.includes(item) ||
                  itemdata.PARSED_MANUAL_TAGS.THEME === item
                ) {
                  return (
                    <div
                      key={index}
                      className="bg-gray-100 border border-dashed py-4 px-2">
                      {itemdata.Title}
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

export default GroupedData;

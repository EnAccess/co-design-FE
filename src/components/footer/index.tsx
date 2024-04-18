import React from "react";
import Star from "../icons/Star";
import { getColorByAccess } from "../../utils/helpers";
import { filteredResources } from "./data-resources";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center my-4 p-4 px-8 text-base font-bold float-end border-2 border-gray-600 mr-14">
      <h2 className="mb-4">All Resources are Open Access: unless indicated:</h2>
      {filteredResources.map((data, index) => {
        const color = getColorByAccess(data);
        return (
          <div
            key={index}
            className="flex gap-5 w-2/3 justify-center items-center"
          >
            <p className="text-center w-full">{data}</p>
            <Star color={color} />
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;

import React from "react";
import { uniqueDataSources } from "./data-source";
import Star from "../icons/Star";
import { getColorByAccess } from "../../utils/helpers";

const Footer = () => {
  return (
    <footer className="text-center my-4 p-4 px-8 text-base font-bold float-end border-2 border-gray-600 mr-14">
      <h2 className="mb-4">All Resources are Open Access: unless indicated:</h2>
      {uniqueDataSources.map((source, index) => {
        const color = getColorByAccess(source);
        return (
          <div
            key={index}
            className="flex gap-5 w-full justify-center items-center"
          >
            <p>{source}</p>
            <Star color={color} />
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;

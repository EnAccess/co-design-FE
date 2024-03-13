import classNames from "classnames";
import { ST } from "next/dist/shared/lib/utils";
import React from "react";
import { ArcherElement } from "react-archer";
import Star from "../icons/Star";

const InformationCard = ({ data }: any) => {
  const level = Array.isArray(data.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL)
    ? data.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL[0]
    : data.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
  const bgColor = classNames({
    "bg-[#dae8fc] border-[#6c8ebf]": level == 0,
    "bg-[#d5e8d4] border-[#82b366]": level == 1,
    "bg-[#ffe6cc] border-[#d79b00]": level == 2,
    "bg-[#e1d5e7] border-[#9673a6]": level == 3,
  });
  return (
    <div key={data.Key} id={data.Key} className="group cursor-pointer">
      <ArcherElement
        id={data.Key}
        relations={
          data.Extra
            ? [
                ...data.PARSED_RELATES_TO.map((item: any) => {
                  console.log({ item });
                  return {
                    targetId: item,
                    sourceAnchor: "top",
                    targetAnchor: "bottom",
                    style: {
                      strokeDasharray: "5,5",
                      strokeColor: "black",
                    },
                  };
                }),
              ]
            : []
        }
      >
        <div
          className={`py-4 px-2 text-sm  rounded-md border-solid border-2 hover:border-4 box-content hover:relative hover:border-purple-500 ${bgColor}`}
        >
          <div className="relative">
            {data.Title}
            {data.PARSED_MANUAL_TAGS.ACCESS === "Institutional Access" ? (
              <div className="absolute -bottom-5 -right-5">
                <Star />
              </div>
            ) : (
              ""
            )}
            <p>CO_DESIGN_LEVEL: {level} </p>

            <div className="absolute hidden group-hover:block bg-white border p-4 mt-2- z-10">
              <p>Extra: {data.Extra}</p>
              <p>{data.Manual_Tags}</p>
            </div>
          </div>
        </div>
      </ArcherElement>
    </div>
  );
};

export default InformationCard;

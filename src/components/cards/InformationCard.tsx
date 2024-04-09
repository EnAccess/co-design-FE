import classNames from "classnames";
import React from "react";
import { ArcherElement } from "react-archer";
import Star from "../icons/Star";
import { getColorByAccess } from "../../utils/Helper";

const InformationCard = ({ data }: any) => {
  const level = Array.isArray(data.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL)
    ? data.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL[0]
    : data.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
  const bgColor = classNames({
    "bg-level-primary-0 border-level-secondary-0": level == 0,
    "bg-level-primary-1 border-level-secondary-1": level == 1,
    "bg-level-primary-2 border-level-secondary-2": level == 2,
    "bg-level-primary-3 border-level-secondary-3": level == 3,
  });
  const dataAccess = data.PARSED_MANUAL_TAGS.ACCESS;
  const starColor = getColorByAccess(dataAccess);

  return (
    <div key={data.Key} id={data.Key} className="group cursor-pointer">
      <ArcherElement
        id={data.Key}
        relations={
          data.Extra
            ? [
                ...data.PARSED_RELATES_TO.map((item: any) => {
                  let newItem;
                  if (item.split(" ").length > 1) {
                    newItem = item.split(" ")[1];
                  } else {
                    newItem = item;
                  }
                  return {
                    targetId: newItem,
                    sourceAnchor: "top",
                    targetAnchor: "top",
                    style: {
                      strokeDasharray: "5,5",
                      strokeColor: "rgba(0, 0, 0, 0.4)",
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
            {dataAccess === "Institutional Access" ||
            dataAccess === "Paid Service" ||
            dataAccess === "Open Source" ? (
              <div className="absolute -bottom-5 -right-5">
                <Star color={starColor} />
              </div>
            ) : (
              ""
            )}
            <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-20">
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

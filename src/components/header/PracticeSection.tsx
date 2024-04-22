import React from "react";
import Line from "../icons/Line";
import LevelCard from "../cards/Level";
import practiceLevels from "@/data/practice";

const length = practiceLevels.length;
const PracticeSection = ({ title }: { title: string }) => {
  return (
    <div className="w-1/3 h-[28rem]">
      <p className="text-center text-gray-500 text-xl font-bold mb-3">
        {title}
      </p>
      <div className="h-full flex items-center justify-center">
        <div className="h-[20rem] -mt-4">
          <div className="flex relative">
            {practiceLevels.map((level, index) => (
              <React.Fragment key={index}>
                <div className="flex  flex-col items-center">
                  {index % 2 === 0 ? (
                    <div className="w-52">
                      <div className="h-36 flex justify-center items-end">
                        <LevelCard
                          level={level.level}
                          title={level.title}
                          description={level.description}
                          attribute={level.attribute}
                        />
                      </div>

                      <div className="relative">
                        <div className="flex justify-center w-52 rotate-180">
                          <Line />
                        </div>
                        <div className="flex items-center self-start absolute w-6/6 top-[45%]">
                          <div className="h-[10px] w-52 bg-[#dc2626] absolute"></div>
                          {index === length - 1 && (
                            <div className="left-52 absolute w-0 h-0 border-y-[15px] border-l-[30px] border-y-transparent border-l-[#dc2626] "></div>
                          )}
                        </div>
                      </div>

                      <p className="text-center px-1 text-xs h-36 leading-tight">
                        {level.text}
                      </p>
                    </div>
                  ) : (
                    <div className="w-52">
                      <div className="h-36 flex justify-center items-end">
                        <p className="text-center px-1 text-xs leading-tight">
                          {level.text}
                        </p>
                      </div>

                      <div className="relative">
                        <div className="flex justify-center w-52">
                          <Line />
                        </div>
                        <div className="flex items-center -pl-52 absolute w-full top-[45%]">
                          <div className="h-[10px] w-52 bg-[#dc2626] absolute"></div>
                          {index === length - 1 && (
                            <div className="-right-4 absolute w-0 h-0 border-y-[15px] border-l-[30px] border-y-transparent border-l-[#dc2626] "></div>
                          )}
                        </div>
                      </div>
                      <div className=" h-36">
                        <LevelCard
                          level={level.level}
                          title={level.title}
                          description={level.description}
                          attribute={level.attribute}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeSection;

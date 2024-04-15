import React from "react";
interface Props {
  isCaseStudyBlock?: boolean;
  title: string;
  description?: string;
}

const HeaderCard = ({ isCaseStudyBlock, title, description }: Props) => {
  if (isCaseStudyBlock === true)
    return <h1 className="m-2 text-lg font-semibold">{title}</h1>;
  return (
    <div className="bg-yellow-200 flex justify-between gap-4 px-5 py-5 w-4/5">
      <h3 className="text-2xl md:w-1/2 font-semibold">{title}</h3>
      <p
        className="text-sm md:w-1/2 text-center"
        dangerouslySetInnerHTML={{ __html: description || "" }}
      ></p>
    </div>
  );
};

export default HeaderCard;

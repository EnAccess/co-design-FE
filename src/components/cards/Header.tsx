import React from "react";
interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <div className="bg-yellow-200 flex justify-center px-5 py-5 w-4/5">
      <h3 className="text-2xl font-semibold w-1/3-">{title}</h3>
      <p
        className="text-sm w-1/2- text-center"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

export default Header;

import React from "react";

const List = ({ list, title }) => {
  return (
    <div className="mt-5 basis-1/3">
      <h4 className="font-medium text-2xl lg:text-3xl tracking-wider">
        {title}
      </h4>
      <ul className="ml-5 mt-2 space-y-1">
        {list?.map((object, index) => (
          <li className="capitalize text-sm lg:text-lg list-disc" key={index}>
            {object}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

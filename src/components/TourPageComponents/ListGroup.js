import React from "react";
import List from "./List";

const ListGroup = ({ tour }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 lg:justify-center lg:mt-10">
      <List list={tour.included} title="What's Included" />
      <List list={tour.whatToBring} title="What to Bring" />
      <List list={tour.importantNotes} title="Important Information" />
    </div>
  );
};

export default ListGroup;

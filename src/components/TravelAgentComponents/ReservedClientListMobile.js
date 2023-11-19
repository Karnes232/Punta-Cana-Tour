import React from "react";
import { Link } from "gatsby";
const ReservedClientListMobile = ({ client }) => {
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          Name:{" "}
          <span className="font-semibold">
            <Link to={`/travelagent/reserved/${client.id}`}>{client.name}</Link>
          </span>
        </div>
        <div className="font-normal text-left">
          Email: <a href={`mailto:${client.email}`}>{client.email}</a>
        </div>
        <div className="font-normal text-left">Hotel: {client.hotel}</div>
        <div className="font-normal text-left">
          Excursion Date: {client.excursionDate}
        </div>
      </div>
    </>
  );
};

export default ReservedClientListMobile;

import React from "react";
import { Link } from "gatsby";
const TransferClientListMobile = ({ client }) => {
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          Name:{" "}
          <span className="font-semibold">
            <Link to={`/travelagent/transfer/${client.id}`}>
              {client.formData.name}
            </Link>
          </span>
        </div>
        <div className="font-normal text-left">
          Email:{" "}
          <a href={`mailto:${client.formData.email}`}>
            {client.formData.email}
          </a>
        </div>
        <div className="font-normal text-left">
          Vehicle: {client.formData.vehicle}
        </div>
        <div className="font-normal text-left">Amount: ${client.amount}</div>
      </div>
    </>
  );
};

export default TransferClientListMobile;

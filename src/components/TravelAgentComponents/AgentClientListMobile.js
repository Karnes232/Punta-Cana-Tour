import React from "react";
import { Link } from "gatsby";
const AgentClientListMobile = ({ client }) => {
  let purchasedDate = new Date(client.createdAt?.seconds * 1000);
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          Client Name:{" "}
          <span className="font-semibold">
            <Link to={`/travelagent/agentbooking/${client.id}`}>
              {" "}
              {client.formData.name}
            </Link>
          </span>
        </div>

        <div className="font-normal text-left">
          Purchased Date: {purchasedDate.toLocaleDateString("en-CA")}
        </div>
        <div className="font-normal text-left">
          Total Price: ${client.totalPrice}
        </div>

        <div className="font-normal text-left">Deposit: ${client.deposit}</div>
        <div className="font-normal text-left">
          Tour Rep:{" "}
          <Link to={`/travelagent/touroperators/${client.tourRepId}`}>
            {client.formData["Tour Rep"]}
          </Link>
        </div>
      </div>
    </>
  );
};

export default AgentClientListMobile;

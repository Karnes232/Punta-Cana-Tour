import React from "react";
import { Link } from "gatsby";
const IndividualAgentClientListMobile = ({ booking }) => {
  let purchasedDate = new Date(booking.createdAt?.seconds * 1000);
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          Client Name:{" "}
          <span className="font-semibold">
            <Link to={`/travelagent/agentbooking/${booking?.id}`}>
              {" "}
              {booking?.formData?.name}
            </Link>
          </span>
        </div>
        <div className="font-normal text-left">
          Client Email:{" "}
          <a href={`mailto:${booking?.formData?.email}`}>
            {booking?.formData?.email}
          </a>
        </div>

        <div className="font-normal text-left">
          Purchased Date: {purchasedDate.toLocaleDateString("en-CA")}
        </div>
        <div className="font-normal text-left">
          Total Price: ${booking.totalPrice}
        </div>

        <div className="font-normal text-left">Deposit: ${booking.deposit}</div>
      </div>
    </>
  );
};

export default IndividualAgentClientListMobile;

import React from "react";
import { Link } from "gatsby";
const PaidClientListMobile = ({ client }) => {
  let purchasedDate = new Date(client.createdAt?.seconds * 1000);
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          Name:{" "}
          <span className="font-semibold">
            <Link to={`/travelagent/reserved/${client.id}`}>
              {" "}
              {client.name.given_name} {client.name.surname}
            </Link>
          </span>
        </div>
        <div className="font-normal text-left">
          Email: <a href={`mailto:${client.email}`}>{client.email}</a>
        </div>
        <div className="font-normal text-left">
          Purchased Date: {purchasedDate.toLocaleDateString("en-CA")}
        </div>
        <div className="font-normal text-left">
          Total Price: ${client.totalPrice}
        </div>

        <div className="font-normal text-left">Deposit: ${client.deposit}</div>
      </div>
    </>
  );
};

export default PaidClientListMobile;

import React from "react";

const PaidClientListMobile = ({ client }) => {
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          Name:{" "}
          <span className="font-semibold">
            {client.name.given_name} {client.name.surname}
          </span>
        </div>
        <div className="font-normal text-left">
          Email: <a href={`mailto:${client.email}`}>{client.email}</a>
        </div>
        <div className="font-normal text-left">
          Country: {client.address.country_code}
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

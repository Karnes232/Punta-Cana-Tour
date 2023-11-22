import React from "react";

const IndividualTransfer = ({ client }) => {
  console.log(client);
  return (
    <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-5/6 lg:w-1/2 xl:w-1/3">
      <tbody>
        <tr>
          <th className="p-2">Name:</th>
          <td className="capitalize">{client?.formData?.name}</td>
        </tr>
        <tr>
          <th className="p-2">Email:</th>
          <td className="">
            <a href={`mailto:${client?.formData?.email}`}>
              {client?.formData?.email}
            </a>
          </td>
        </tr>
        <tr>
          <th className="p-2">Tel:</th>
          <td className="">
            <a href={`tel:${client?.formData?.telephone}`}>
              {client?.formData?.telephone}
            </a>
          </td>
        </tr>
        <tr>
          <th className="p-2">Date:</th>
          <td className="capitalize">{client?.formData?.date}</td>
        </tr>
        <tr>
          <th className="p-2">Time:</th>
          <td className="capitalize">{client?.formData?.time}</td>
        </tr>
        <tr>
          <th className="p-2">Price:</th>
          <td className="capitalize">${client?.formData?.price}</td>
        </tr>
        <tr>
          <th className="p-2">Passengers:</th>
          <td className="capitalize">{client?.formData?.passengerCount}</td>
        </tr>
        <tr>
          <th className="p-2">Vehicle:</th>
          <td className="capitalize">{client?.formData?.vehicle}</td>
        </tr>
        <tr>
          <th className="p-2">Type:</th>
          <td className="capitalize">{client?.formData?.transferType}</td>
        </tr>
        <tr>
          <th className="p-2">Flight #:</th>
          <td className="uppercase">{client?.formData?.flightNumber}</td>
        </tr>
        <tr>
          <th className="p-2">Hotel:</th>
          <td className="capitalize">{client?.formData?.hotelSelect}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default IndividualTransfer;

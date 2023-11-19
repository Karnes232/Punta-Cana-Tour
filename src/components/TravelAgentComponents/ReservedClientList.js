import React from "react";

const ReservedClientList = ({ client }) => {
  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {" "}
          {client.name}
        </th>
        <td className="px-6 py-4">
          <a href={`mailto:${client.email}`}>{client.email}</a>
        </td>
        <td className="px-6 py-4">{client.hotel}</td>
        <td className="px-6 py-4">{client.excursionDate}</td>
      </tr>
    </>
  );
};

export default ReservedClientList;

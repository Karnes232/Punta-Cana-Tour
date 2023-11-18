import React from "react";
import { Link } from "gatsby";
const TransferClientList = ({ client }) => {
  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {" "}
          <Link to={`/travelagent/transfer/${client.id}`}>
            {client.formData.name}
          </Link>
        </th>
        <td className="px-6 py-4">
          <a href={`mailto:${client.formData.email}`}>
            {client.formData.email}
          </a>
        </td>
        <td className="px-6 py-4">{client.formData.vehicle}</td>
        <td className="px-6 py-4">${client.amount}</td>
      </tr>
    </>
  );
};

export default TransferClientList;

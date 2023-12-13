import React from "react";
import { Link } from "gatsby";
const PaidClientList = ({ client }) => {
  console.log(client);
  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          <Link to={`/travelagent/paidclients/${client.id}`}>
            {" "}
            {client.name.given_name} {client.name.surname}
          </Link>
        </th>
        <td className="px-6 py-4">
          <a href={`mailto:${client.email}`}>{client.email}</a>
        </td>
        <td className="px-6 py-4">{client.address.country_code}</td>
        <td className="px-6 py-4">${client.totalPrice}</td>
        <td className="px-6 py-4">${client.deposit}</td>
      </tr>
    </>
  );
};

export default PaidClientList;

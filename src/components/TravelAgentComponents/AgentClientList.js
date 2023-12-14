import React from "react";
import { Link } from "gatsby";
const AgentClientList = ({ client }) => {
  let purchasedDate = new Date(client.createdAt?.seconds * 1000);
  console.log(client.tourRepId);
  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          <Link to={`/travelagent/agentbooking/${client.id}`}>
            {" "}
            {client.formData.name}
          </Link>
        </th>

        <td className="px-6 py-4">
          {purchasedDate.toLocaleDateString("en-CA")}
        </td>
        <td className="px-6 py-4">${client.totalPrice}</td>
        <td className="px-6 py-4">${client.deposit}</td>
        <td className="px-6 py-4">
          <Link to={`/travelagent/touroperators/${client.tourRepId}`}>
            {client.formData["Tour Rep"]}{" "}
          </Link>
        </td>
      </tr>
    </>
  );
};

export default AgentClientList;

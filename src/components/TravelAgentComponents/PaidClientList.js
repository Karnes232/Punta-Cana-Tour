import React from "react";
import { Link } from "gatsby";
const PaidClientList = ({ client }) => {
  let purchasedDate = new Date(client.createdAt?.seconds * 1000);
  console.log(client.formInfo.Tour1?.split("-"));
  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          <Link to={`/travelagent/reserved/${client.id}`}> {client.name}</Link>
        </th>
        <td className="px-6 py-4">
          <a href={`mailto:${client.email}`}>{client.email}</a>
        </td>
        <td className="px-6 py-4">
          {purchasedDate.toLocaleDateString("en-CA")}
        </td>
        <td className="px-6 py-4">{client.formInfo.Tour1?.split("-")[1]}</td>
      </tr>
    </>
  );
};

export default PaidClientList;

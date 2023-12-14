import React from "react";
import { Link } from "gatsby";
const IndividualAgentClientList = ({ booking }) => {
  let purchasedDate = new Date(booking.createdAt?.seconds * 1000);

  return (
    <>
      <tr className="bg-white hover:bg-gray-50">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          <Link to={`/travelagent/agentbooking/${booking?.id}`}>
            {" "}
            {booking?.formData?.name}
          </Link>
        </th>

        <td className="px-6 py-4">
          <a href={`mailto:${booking?.formData?.email}`}>
            {booking?.formData?.email}
          </a>
        </td>
        <td className="px-6 py-4">
          {purchasedDate.toLocaleDateString("en-CA")}
        </td>
        <td className="px-6 py-4">${booking?.totalPrice}</td>
        <td className="px-6 py-4">${booking?.deposit}</td>
      </tr>
    </>
  );
};

export default IndividualAgentClientList;

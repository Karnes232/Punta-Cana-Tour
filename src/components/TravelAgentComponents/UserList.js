import { Link } from "gatsby";
import React from "react";

const UserList = ({ user }) => {
  return (
    <tr className="bg-white hover:bg-gray-50">
      <Link to={`/travelagent/touroperators/${user.id}`}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
        >
          {user.company}
        </th>
      </Link>
      <td className="px-6 py-4">{user.name}</td>
      <td className="px-6 py-4">
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </td>
      <td className="px-6 py-4">{user.country}</td>
      <td className="px-6 py-4">
        <a href={`tel:${user.telephone}`}>{user.telephone}</a>
      </td>
    </tr>
  );
};

export default UserList;

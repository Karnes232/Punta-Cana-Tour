import React from "react";
import { Link } from "gatsby";
const IndividualUser = ({ user }) => {
  const gotoUserPage = () => {
    if (window !== undefined) {
      window.location.href = `/travelagent/touroperators/${user.referredBy.id}`;
    }
  };
  console.log(user);
  return (
    <>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
        <tbody>
          <tr>
            <th className="p-2">Name:</th>
            <td className="capitalize">{user.name}</td>
          </tr>
          <tr>
            <th className="p-2">Company:</th>
            <td className="capitalize">{user.company}</td>
          </tr>
          <tr>
            <th className="p-2">Email:</th>
            <td className="">
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </td>
          </tr>
          <tr>
            <th className="p-2">Country:</th>
            <td className="capitalize">{user.country}</td>
          </tr>
          <tr>
            <th className="p-2">Phone:</th>
            <td>
              <a href={`tel:${user.telephone}`}>{user.telephone}</a>
            </td>
          </tr>
          <tr>
            <th className="p-2">Is Admin:</th>
            <td className="capitalize">{user.isAdmin?.toString()}</td>
          </tr>
          {user.referredBy ? (
            <>
              <tr>
                <th className="p-2">Referred By:</th>
                <td
                  className="capitalize cursor-pointer"
                  onClick={gotoUserPage}
                >
                  {user.referredBy.name}
                </td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <th className="p-2">Referred By:</th>
                <td className="capitalize">None</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <table className="mx-auto text-base text-left text-gray-500 shadow rounded-xl overflow-hidden w-11/12 lg:w-1/2 xl:w-1/3">
        <tbody>
          <tr>
            <Link to={`/travelagent/${user?.id}`}>
              <th className="p-2">Agent's Bookings</th>
            </Link>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default IndividualUser;

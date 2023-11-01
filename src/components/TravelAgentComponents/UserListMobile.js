import { Link } from "gatsby";
import React from "react";

const UserListMobile = ({ user }) => {
  return (
    <>
      <div className="min-w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div className="font-normal text-left">
          <Link to={`/travelagent/touroperators/${user.id}`}>
            {" "}
            Company: <span className="font-semibold">{user.company}</span>
          </Link>
        </div>
        <div className="font-normal text-left">Name: {user.name}</div>
        <div className="font-normal text-left">
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
        <div className="font-normal text-left">Country: {user.country}</div>
        <div className="font-normal text-left">
          Phone: <a href={`tel:${user.telephone}`}>{user.telephone}</a>
        </div>
      </div>
    </>
  );
};

export default UserListMobile;

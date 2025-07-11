import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

const Copyright = () => {
  const [date, setDate] = useState(undefined);
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <div className="flex flex-col justify-between py-4 md:flex-row md:items-center md:mx-auto w-full">
       <div className="md:flex-1"></div>
      <Link to="/" className="md:flex-1 text-center">
        <p className="footerSitemap font-medium tracking-wider">
          &copy; {date} Punta Cana Tour Store
        </p>
      </Link>
      <p className="text-sm text-slate-800 flex justify-center items-center gap-2 md:flex-1 md:justify-end md:mr-8">
        Built by
        <a
          href="https://dr-webstudio.com"
          className="flex items-center gap-1 hover:text-orange-500 cursor-pointer"
          target="_blank"
        >
          <img
            src="https://cdn.sanity.io/images/6r8ro1r9/production/81a1e4e2b8efbeb881d9ef9dd1624377bcd2f6d0-512x487.png"
            alt="DR Web Studio"
            className="h-4"
          />
          DR Web Studio
        </a>
      </p>
    </div>
  );
};

export default Copyright;

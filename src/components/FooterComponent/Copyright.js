import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

const Copyright = () => {
  const [date, setDate] = useState(undefined);
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <div className="mx-8 flex flex-col justify-between py-4 md:flex-row md:items-center md:mx-auto">
      <Link to="/">
        <p className="footerSitemap font-medium tracking-wider">
          &copy; {date} ThrillQuest Punta Cana
        </p>
      </Link>
    </div>
  );
};

export default Copyright;

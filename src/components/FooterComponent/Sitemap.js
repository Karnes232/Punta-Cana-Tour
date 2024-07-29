import { Link } from "gatsby";

import React from "react";

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="flex justify-between pt-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link to="/">
          <p className="footerSitemap">Home</p>
        </Link>
        <Link to="/tours">
          <p className="footerSitemap">Tours</p>
        </Link>
        <Link to="/transfer/punta-cana">
          <p className="footerSitemap">Transfer</p>
        </Link>
        <Link to="/recommendations/attractions">
          <p className="footerSitemap">Attractions</p>
        </Link>
        <Link to="/blog">
          <p className="footerSitemap">Blogs</p>
        </Link>
      </div>
      <div className="flex justify-evenly pt-2 pb-4 mx-auto max-w-xs md:max-w-2xl md:flex-row">
        <Link to="/information/cancellation">
          <p className="footerSitemap text-center">Cancellation Policy</p>
        </Link>
        <Link to="/information/privacy">
          <p className="footerSitemap text-center">Privacy</p>
        </Link>
        <Link to="/information/termsconditions">
          <p className="footerSitemap text-center">Terms & Conditions</p>
        </Link>
      </div>
      <div className="flex justify-evenly pt-2 pb-4 mx-auto max-w-xs md:max-w-2xl md:flex-row">
        <Link to="/about">
          <p className="footerSitemap">About</p>
        </Link>
        <Link to="/travelagent">
          <p className="footerSitemap">Travel Agents</p>
        </Link>
        <Link to="/contact">
          <p className="footerSitemap">Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Sitemap;

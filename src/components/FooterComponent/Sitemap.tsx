import { Link } from "gatsby"

import React from "react"

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="mx-8 flex flex-col justify-between py-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link to="/about">
          <p className="footerSitemap">About</p>
        </Link>
        <Link to="/services">
          <p className="footerSitemap">Services</p>
        </Link>
        <Link to="/gallery">
          <p className="footerSitemap">Gallery</p>
        </Link>
        <Link to="/contact">
          <p className="footerSitemap">Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Sitemap

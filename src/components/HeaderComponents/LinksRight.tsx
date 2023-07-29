import React from "react"

import { Link } from "gatsby"

const LinksRight = () => {
  return (
    <div className="hidden lg:flex lg:w-96 xl:w-[35rem] lg:justify-between">
      <Link to="/" className="no-underline">
        <button className="navLinks">Home</button>
      </Link>
      <Link to="/tours" className="no-underline">
        <button className="navLinks">Tours</button>
      </Link>
      <Link to="/about" className="no-underline">
        <button className="navLinks">About</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className="navLinks">Contact</button>
      </Link>
    </div>
  )
}

export default LinksRight

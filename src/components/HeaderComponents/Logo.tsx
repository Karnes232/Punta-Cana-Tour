import React from "react"

import { Link } from "gatsby"

const Logo = () => {
  const image = "https://images.ctfassets.net/h9wjlzs95u7s/4HgyA08r0FnTu8TPj0V6PH/4fdd42175d581c86a7ec0f44a3e3d9ab/TourLogoS.png"
  return (
    <>
      <div className="flex justify-center items-center overflow-hidden">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="cursor-pointer flex items-center mt-2 md:mt-5 xl:mt-10 w-20 md:w-32">
            <img
              src={image}
              className="w-20 md:w-32"
              alt=""
            />
          </div>
        </Link>
      </div>
    </>
  )
}



export default Logo

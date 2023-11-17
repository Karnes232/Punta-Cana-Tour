import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const hidden = () => {
  return (
    <div><StaticImage
    src="../images/logo.webp"
    loading="eager"
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
  /></div>
  )
}

export default hidden
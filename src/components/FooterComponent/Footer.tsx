import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Copyright from "./Copyright"
import Sitemap from "./Sitemap"
import SocialMedia from "./SocialMedia"
import { useStaticImageRequest } from "../../staticQueryHooks/useStaticImageRequest"
const Footer = () => {
  const imageFile = useStaticImageRequest()
  const FooterStyles = {
    backgroundImage: "url(http:" + imageFile?.footerBackground.file.url + ")",
  }

  return (
    <footer
      style={FooterStyles}
      className="h-48 bg-contain md:bg-cover bg-bottom bg-no-repeat"
    >
      {/* <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia classes="border-b border-gray-500 md:border-none" />
        <Sitemap />
        <div className="flex flex-col justify-between md:flex-row">
          <Copyright />
        </div>
      </div> */}
    </footer>
  )
}

export default Footer

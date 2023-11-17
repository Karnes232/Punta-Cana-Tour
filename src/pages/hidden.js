import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const hidden = () => {
  return (
    <div>
      <StaticImage
        src="../images/image-1.png"
        loading="eager"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <StaticImage
        src="../images/image-2.png"
        loading="eager"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <StaticImage
        src="../images/image-3.png"
        loading="eager"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
      <StaticImage
        src="../images/image-4.png"
        loading="eager"
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
      />
    </div>
  );
};

export default hidden;

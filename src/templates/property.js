import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import TourInfo from "../components/TourPageComponents/TourInfo";

const Property = ({ pageContext }) => {
  console.log(pageContext.property);
  return (
    <Layout
      logo={pageContext.layout.logo}
      footerBackground={pageContext.layout.footerBackground.url}
      facebook={pageContext.layout.facebook}
      instagram={pageContext.layout.instagram}
      whatsApp={pageContext.layout.whatsApp}
      email={pageContext.layout.email}
      gImage={pageContext.layout.footerBackground.gatsbyImage}
      color="black"
    >
      <div className="lg:hidden">
        <HeroComponent
          imageUrl={pageContext?.property?.mainImage?.url}
          gImage={pageContext?.property?.mainImage?.gatsbyImage}
          heroText=""
          heroText2=""
          button={false}
        />
      </div>
      <div className="hidden lg:flex max-w-6xl mx-auto">
        <PhotoGrid tourPhotos={pageContext?.property?.images} />
      </div>
      <div className="max-w-6xl my-5 mx-5 md:mx-10 xl:mx-auto"></div>
    </Layout>
  );
};

export default Property;

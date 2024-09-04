import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import HotelInfo from "../components/HotelComponents/HotelInfo";
import Amenities from "../components/PropertyComonents/Amenities";

const Hotel = ({ pageContext }) => {
  console.log(pageContext.hotel);
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
          imageUrl={pageContext?.hotel?.mainImage?.url}
          gImage={pageContext?.hotel?.mainImage?.gatsbyImage}
          heroText=""
          heroText2=""
          button={false}
        />
      </div>
      <div className="hidden lg:flex max-w-6xl mx-auto">
        <PhotoGrid tourPhotos={pageContext?.hotel?.images} />
      </div>
      <div className="max-w-6xl my-5 mx-5 md:mx-10  xl:mx-auto">
        <HotelInfo
          title={pageContext.hotel.title}
          propertyType={pageContext.hotel.hotelType}
          location={pageContext.hotel.generalLocation}
          price={pageContext.hotel.price}
        />
        <Amenities amenities={pageContext.hotel.amenities} />
      </div>
    </Layout>
  );
};

export default Hotel;

export const Head = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <>
      <Seo
        title={pageContext.hotel.seoTitle}
        description={pageContext.hotel.seoDescription}
        keywords={pageContext.hotel.seoKeywords?.join(", ")}
        schemaMarkup={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: pageContext.hotel.title,
          image: `https://www.puntacanatourstore.com${pageContext.hotel.mainImage.gatsbyImage.images.fallback.src}`,
          description: pageContext.hotel.seoDescription,
        }}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/hotels/${pageContext.hotel.urlSlug}`}
      />
    </>
  );
};

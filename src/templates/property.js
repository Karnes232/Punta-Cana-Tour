import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import PropertyInfo from "../components/PropertyComonents/PropertyInfo";
import Seo from "../components/seo";
import PropertyBody from "../components/PropertyComonents/PropertyBody";
import Amenities from "../components/PropertyComonents/Amenities";
import ContactForm from "../components/PropertyComonents/Form/ContactForm";
import CarouselLightBox from "../components/PropertyComonents/CarouselLightBox";
import Video from "../components/TourPageComponents/Video";

const Property = ({ pageContext }) => {
  //console.log(pageContext.property.videoUrl);
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
      <div className="max-w-6xl my-5 mx-5 md:mx-10  xl:mx-auto">
        <PropertyInfo
          title={pageContext.property.title}
          propertyType={pageContext.property.propertyType}
          location={pageContext.property.generalLocation}
          saleOrRent={pageContext.property.saleOrRent}
          price={pageContext.property.price}
          bathrooms={pageContext.property.bathrooms}
          bedrooms={pageContext.property.bedrooms}
          sqFeet={pageContext.property.squareFeet}
        />
        <Amenities amenities={pageContext.property.amenities} />
      </div>
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl xl:mx-auto">
        <PropertyBody context={pageContext.property.description} />
        <div className="flex flex-col-reverse lg:flex-col lg:w-6/12 flex-grow lg:ml-5">
          <ContactForm
            property={pageContext.property}
            email={pageContext.layout.email}
            formName='PropertyForm'
          />
          <CarouselLightBox photoList={pageContext?.property?.images} />
        </div>
      </div>
      {pageContext?.property?.videoUrl?.map((video, index) => {
        return (
          <div className="" key={index}>
            <Video url={video} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Property;

export const Head = ({ pageContext }) => {
  return (
    <>
      <Seo
        title={pageContext.property.seoTitle}
        description={pageContext.property.seoDescription}
        keywords={pageContext.property.seoKeywords?.join(", ")}
        schemaMarkup={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: pageContext.property.title,
          image: `https://www.puntacanatourstore.com${pageContext.property.mainImage.gatsbyImage.images.fallback.src}`,
          description: pageContext.property.seoDescription,
        }}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/properties/${pageContext.property.urlSlug}`}
      />
    </>
  );
};

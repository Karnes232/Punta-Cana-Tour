import React from "react";
import Layout from "../components/layout";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import PhotoGrid from "../components/TourPageComponents/PhotoGrid";
import PropertyInfo from "../components/PropertyComonents/PropertyInfo";
import Seo from "../components/seo";
import BlogBody from "../components/BlogComponents/BlogBody";

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
      </div>
      <BlogBody context={pageContext.property.description} />
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

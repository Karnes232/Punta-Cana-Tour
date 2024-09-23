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
import { graphql } from "gatsby";

const Property = ({ pageContext, data }) => {
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
          imageUrl={data?.allContentfulProperty?.nodes[0]?.mainImage?.url}
          gImage={data?.allContentfulProperty?.nodes[0]?.mainImage?.gatsbyImage}
          heroText=""
          heroText2=""
          button={false}
        />
      </div>
      <div className="hidden lg:flex max-w-6xl mx-auto">
        <PhotoGrid tourPhotos={data?.allContentfulProperty?.nodes[0]?.images} />
      </div>
      <div className="max-w-6xl my-5 mx-5 md:mx-10  xl:mx-auto">
        <PropertyInfo
          title={data?.allContentfulProperty?.nodes[0].title}
          propertyType={data?.allContentfulProperty?.nodes[0].propertyType}
          location={data?.allContentfulProperty?.nodes[0].generalLocation}
          saleOrRent={data?.allContentfulProperty?.nodes[0].saleOrRent}
          price={data?.allContentfulProperty?.nodes[0].price}
          bathrooms={data?.allContentfulProperty?.nodes[0].bathrooms}
          bedrooms={data?.allContentfulProperty?.nodes[0].bedrooms}
          sqFeet={data?.allContentfulProperty?.nodes[0].squareFeet}
        />
        <Amenities
          amenities={data?.allContentfulProperty?.nodes[0].amenities}
        />
      </div>
      <div className="flex flex-col lg:flex-row justify-between max-w-6xl xl:mx-auto">
        <PropertyBody
          context={data?.allContentfulProperty?.nodes[0].description}
        />
        <div className="flex flex-col-reverse lg:flex-col lg:w-6/12 flex-grow lg:ml-5">
          <ContactForm
            property={data?.allContentfulProperty?.nodes[0]}
            email={pageContext.layout.email}
            formName="PropertyForm"
          />
          <CarouselLightBox
            photoList={data?.allContentfulProperty?.nodes[0]?.images}
          />
        </div>
      </div>
      {data?.allContentfulProperty?.nodes[0]?.videoUrl?.map((video, index) => {
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

export const Head = ({ data }) => {
  return (
    <>
      <Seo
        title={data?.allContentfulProperty?.nodes[0].seoTitle}
        description={data?.allContentfulProperty?.nodes[0].seoDescription}
        keywords={data?.allContentfulProperty?.nodes[0].seoKeywords?.join(", ")}
        schemaMarkup={{
          "@context": "https://schema.org/",
          "@type": "Product",
          name: data?.allContentfulProperty?.nodes[0].title,
          image: `https://www.puntacanatourstore.com${data?.allContentfulProperty?.nodes[0].mainImage.gatsbyImage.images.fallback.src}`,
          description: data?.allContentfulProperty?.nodes[0].seoDescription,
        }}
      />
      <link
        rel="canonical"
        href={`https://puntacanatourstore.com/properties/${data?.allContentfulProperty?.nodes[0].urlSlug.trim()}`}
      />
    </>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    allContentfulProperty(filter: { id: { eq: $id } }) {
      nodes {
        id
        title
        urlSlug
        saleOrRent
        propertyType
        price
        generalLocation
        bedrooms
        bathrooms
        amenities
        videoUrl
        description {
          raw
        }
        seoTitle
        seoDescription
        seoKeywords
        mainImage {
          gatsbyImage(width: 2000, formats: WEBP, placeholder: BLURRED)
          title
          url
        }
        squareFeet
        images {
          title
          gatsbyImage(width: 2000, placeholder: BLURRED, formats: WEBP)
          url
          width
          height
        }
      }
    }
  }
`;

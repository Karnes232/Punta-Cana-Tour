import React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import TextComponent from "../../components/TextComponent/TextComponent";

const Index = ({ data }) => {
  console.log(data.allContentfulProperty.edges[0].node);
  return (
    <Layout
      logo={data.allContentfulLayout.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulLayout.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulLayout.edges[0].node.facebook}
      instagram={data.allContentfulLayout.edges[0].node.instagram}
      email={data.allContentfulLayout.edges[0].node.email}
      whatsApp={data.allContentfulLayout.edges[0].node.whatsApp}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
      color="black"
    >
      <HeroComponent
        imageUrl={
          data.allContentfulPageContent.edges[0].node.mainImage.file.url
        }
        gImage={
          data.allContentfulPageContent.edges[0].node.mainImage.gatsbyImage
        }
        heroText=""
        heroText2=""
        button={false}
      />{" "}
      <TextComponent
        title={data.allContentfulPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulLayout {
      edges {
        node {
          logo {
            gatsbyImage(width: 150, formats: WEBP)
          }
          footerBackground {
            url
            gatsbyImage(width: 1920, formats: WEBP)
          }
          email
          facebook
          instagram
          whatsApp
        }
      }
    }
    allContentfulProperty {
      edges {
        node {
          title
          urlSlug
          saleOrRent
          propertyType
          price
          generalLocation
          bedrooms
          bathrooms
          amenities
          seoTitle
          seoDescription
          seoKeywords
          mainImage {
            gatsbyImage(width: 400, formats: WEBP, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulPageContent(filter: { page: { eq: "Properties Page" } }) {
      edges {
        node {
          title
          paragraph1 {
            paragraph1
          }
          mainImage {
            gatsbyImage(width: 1920, formats: WEBP, placeholder: BLURRED)
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Properties Page" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/properties/" />
    </>
  );
};

export default Index;

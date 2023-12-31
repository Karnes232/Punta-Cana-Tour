import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import TextComponent from "../../components/TextComponent/TextComponent";
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import Seo from "../../components/seo";
const index = ({ data }) => {
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
          data.allContentfulAboutPageContent.edges[0].node.aboutHero.file.url
        }
        gImage={
          data.allContentfulAboutPageContent.edges[0].node.aboutHero.gatsbyImage
        }
        heroText={data.allContentfulAboutPageContent.edges[0].node.heroText1}
        heroText2={data.allContentfulAboutPageContent.edges[0].node.heroText2}
        button={false}
      />
      <TextComponent
        title={data.allContentfulAboutPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph2.paragraph2
        }
      />
      <SwiperCarousel
        className="mt-5"
        photoList={
          data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
        }
      />
      <TextComponent
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph3.paragraph3
        }
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph4.paragraph4
        }
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
    allContentfulAboutPageContent {
      edges {
        node {
          title
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
          paragraph4 {
            paragraph4
          }
          heroText1
          heroText2
          aboutHero {
            gatsbyImage(width: 1920, formats: WEBP)
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSwiperPhotoCarousel(filter: { page: { eq: "About" } }) {
      edges {
        node {
          photoList {
            title
            gatsbyImage(width: 1920, formats: WEBP)
            url
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "About" } }) {
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
      <link rel="canonical" href="https://puntacanatourstore.com/about/" />
    </>
  );
};

export default index;

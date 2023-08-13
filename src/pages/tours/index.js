import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import TourHeroComponent from "../../components/HeroComponent/TourHeroComponet";
import TextComponent from "../../components/TextComponent/TextComponent";
import TourCard from "../../components/TourCardComponent/TourCard";
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
    >
      <TourHeroComponent
        image={
          data.allContentfulTourPageContent.edges[0].node.mainImage.file.url
        }
      />
      <TextComponent
        title={data.allContentfulTourPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulTourPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2"
        pClassName="mb-4 lg:mb-0"
      />
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
        {data.allContentfulTour.edges.map((tour, index) => (
          <TourCard tour={tour} key={index} />
        ))}
      </div>
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
          }
          email
          facebook
          instagram
        }
      }
    }
    allContentfulTour {
      edges {
        node {
          url
          name
          price
          category
          mainImage {
            gatsbyImage(width: 400, formats: WEBP)
            file {
              url
            }
          }
          description1 {
            description1
          }
        }
      }
    }
    allContentfulTourPageContent {
      edges {
        node {
          mainImage {
            file {
              url
            }
          }
          title
          paragraph1 {
            paragraph1
          }
        }
      }
    }
  }
`;

export const Head = () => <title>About Page</title>;

export default index;

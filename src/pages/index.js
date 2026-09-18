import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import HomeExperience from "../components/HomeExperience";
import Seo from "../components/seo";
import { home } from "../data/travel-services";
import { homeSchema } from "../utils/service-schema";

const IndexPage = ({ data }) => {
  const layout = data.allContentfulLayout.edges[0].node;
  return (
    <Layout
      logo={layout.logo.gatsbyImage}
      facebook={layout.facebook}
      instagram={layout.instagram}
      whatsApp={layout.whatsApp}
      email={layout.email}
      color="black"
      compactHeader
    >
      <HomeExperience tours={data.allContentfulTours.edges} />
    </Layout>
  );
};

export const query = graphql`
  query HomeExperienceQuery {
    allContentfulLayout {
      edges {
        node {
          logo {
            url
            gatsbyImage(quality: 80, width: 150, formats: WEBP)
          }
          email
          facebook
          instagram
          whatsApp
        }
      }
    }
    allContentfulTours(filter: { featured: { eq: true } }) {
      edges {
        node {
          url
          name
          price
          mainImage {
            gatsbyImage(quality: 85, width: 800, formats: WEBP)
          }
          description1 {
            description1
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {
  return (
    <>
      <Seo
        title={home.title}
        description={home.description}
        canonical="https://puntacanatourstore.com/"
        image="https://puntacanatourstore.com/images/editorial/saona-palm-lined-shore-1440.webp"
        schemaMarkup={homeSchema(data.allContentfulLayout.edges[0].node)}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/" />
    </>
  );
};

export default IndexPage;

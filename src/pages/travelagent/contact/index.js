import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/TravelAgentComponents/Layout";

import Seo from "../../../components/seo";
import ContactForm from "../../../components/ContactFormComponent/ContactForm";
import HeroComponent from "../../../components/HeroComponent/HeroComponent";
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
        heroText=""
        heroText2=""
        button={false}
      />
      <ContactForm
        formName="travelAgentContact"
        url="/travelagent/contact/thankyou/?name="
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
          aboutHero {
            gatsbyImage(width: 1920, formats: WEBP)
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Contact Page" } }) {
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
      <link
        rel="canonical"
        href="https://puntacanatourstore.com/travelagent/contact/"
      />
      <meta name="robots" content="noindex,nofollow"/>  
    </>
  );
};

export default index;

import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import ContactForm from "../../components/ContactFormComponent/ContactForm";
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
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
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
      <ContactForm />
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
  }
`;

export const Head = () => <title>Contact Page</title>;

export default index;

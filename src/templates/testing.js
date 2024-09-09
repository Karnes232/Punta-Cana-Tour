import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Testing = ({ pageContext, data }) => {
  console.log(data);
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
    ></Layout>
  );
};

export default Testing;

export const query = graphql`
  query MyQuery($hotel: String) {
    allContentfulHotelsOrHostel(filter: { id: { eq: $hotel } }) {
      nodes {
        title
      }
    }
  }
`;

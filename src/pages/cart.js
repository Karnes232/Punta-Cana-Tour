import React from "react";

import { graphql } from "gatsby";
import CartLayout from "../components/cartLayout";

import Form from "../components/CartComponent/Form";
import Seo from "../components/seo";

const Cart = ({ data }) => {
  return (
    <CartLayout
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
    >
      <Form
        allTours={data.allContentfulTour}
        hotels={data.allContentfulHotelList.edges}
      />
    </CartLayout>
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
    allContentfulHotelList {
      edges {
        node {
          zone
          hotelName
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Cart" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulTour {
      nodes {
        name
        price
        mainImage {
          gatsbyImage(width: 400, formats: WEBP)
          file {
            url
          }
        }
      }
    }
  }
`;

export default Cart;

export const Head = ({ data }) => {
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/cart" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </>
  );
};

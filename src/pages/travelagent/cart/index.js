import React, { useEffect } from "react";
import Layout from "../../../components/TravelAgentComponents/Layout";
import { graphql, navigate } from "gatsby";
import Seo from "../../../components/seo";
import Form from "../../../components/TravelAgentComponents/CartComponents/Form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase";

const Cart = ({ data }) => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        navigate("/travelagent/signin");
      }
    });
  }, []);

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
    >
      <Form
        hotels={data.allContentfulHotelList.edges}
        allTours={data.allContentfulTours}
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
    allContentfulHotelList {
      edges {
        node {
          zone
          hotelName
        }
      }
    }
    allContentfulTours {
      nodes {
        name
        providerEmail
        price
        mainImage {
          gatsbyImage(width: 400, formats: WEBP)
          file {
            url
          }
        }
        pickupTime {
          internal {
            content
          }
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
      <link
        rel="canonical"
        href="https://puntacanatourstore.com/travelagent/cart/"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </>
  );
};

import React, { useEffect } from "react";

import { graphql, navigate } from "gatsby";
import Seo from "../../components/seo";
import SignIn from "../../components/auth/SignIn";
import Layout from "../../components/TravelAgentComponents/Layout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../config/firebase";
const Index = ({ data }) => {
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        navigate("/travelagent/");
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
      <div className="my-10">
        <SignIn
          image={data.allContentfulLayout.edges[0].node.travelAgentImage}
        />
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
          travelAgentImage {
            gatsbyImage(width: 720, formats: WEBP)
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

    allContentfulSeo(filter: { page: { eq: "Travel Agent" } }) {
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

export default Index;

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
        href="https://puntacanatourstore.com/travelagent/"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </>
  );
};

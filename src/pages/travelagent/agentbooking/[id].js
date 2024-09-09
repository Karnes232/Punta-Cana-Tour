import React, { useEffect, useState } from "react";
import Layout from "../../../components/TravelAgentComponents/Layout";
import Seo from "../../../components/seo";
import { graphql } from "gatsby";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import IndividualReserved from "../../../components/TravelAgentComponents/IndividualReserved";

const AgentClient = ({ location, data }) => {
  const [client, setClient] = useState({});
  const findClient = async (id) => {
    const docRef = doc(db, "travelAgent", id);
    const docSnap = await getDoc(docRef);
    setClient(docSnap.data());
  };
  const userId = location.pathname.split("/");
  useEffect(() => {
    findClient(userId[3]);
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
      <IndividualReserved client={client} />
    </Layout>
  );
};

export default AgentClient;

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
        href="https://puntacanatourstore.com/travelagent/touroperators"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="robots" content="noindex,nofollow" />
    </>
  );
};

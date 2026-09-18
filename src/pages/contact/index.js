import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import TripPlanner from "../../components/ContactFormComponent/TripPlanner";
import Seo from "../../components/seo";
import "../../components/home-experience.css";

export default function ContactPage({ data }) {
  const layout = data.allContentfulLayout.edges[0].node;
  return (
    <Layout
      logo={layout.logo.gatsbyImage}
      facebook={layout.facebook}
      instagram={layout.instagram}
      email={layout.email}
      whatsApp={layout.whatsApp}
      color="black"
      compactHeader
    >
      <TripPlanner email={layout.email} whatsApp={layout.whatsApp} />
    </Layout>
  );
}
export const query = graphql`
  query ContactPlannerQuery {
    allContentfulLayout {
      edges {
        node {
          logo {
            gatsbyImage(quality: 80, width: 150, formats: WEBP)
          }
          email
          facebook
          instagram
          whatsApp
        }
      }
    }
  }
`;
export const Head = () => (
  <>
    <Seo
      title="Contact & Plan Your Punta Cana Trip"
      description="Tell us about your Punta Cana plans. Enquire about tours, airport transfers, hotels, hostels, car rentals and helicopter travel with our trip planning form."
      canonical="https://puntacanatourstore.com/contact/"
    />
    <link rel="canonical" href="https://puntacanatourstore.com/contact/" />
  </>
);

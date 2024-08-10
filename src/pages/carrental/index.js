import React, { useState } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import TextComponent from "../../components/TextComponent/TextComponent";
import Form from "../../components/CarRentalComponents/Form";

const Index = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  console.log(formData)
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
      <TextComponent
        title={data.allContentfulTransferPageContent.edges[0]?.node.title}
        paragraph={
          data.allContentfulTransferPageContent.edges[0]?.node.description
            .description
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-2xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <Form
        image={data.allContentfulTransferPageContent.edges[0].node.airportPhoto}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
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
    allContentfulTransferPageContent(filter: { page: { eq: "Car Rental" } }) {
      edges {
        node {
          title
          description {
            description
          }
          airportPhoto {
            title
            gatsbyImage(width: 620, formats: WEBP)
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Car Rental" } }) {
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
      <link rel="canonical" href="https://puntacanatourstore.com/transfers/" />
    </>
  );
};

export default Index;

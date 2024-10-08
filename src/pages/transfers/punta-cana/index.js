import React, { useState } from "react";
import Seo from "../../../components/seo";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import TextComponent from "../../../components/TextComponent/TextComponent";
import Form from "../../../components/TransferComponents/Form";
import VehicleSelect from "../../../components/TransferComponents/VehicleSelect";

const Index = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transferType: "",
    passengerCount: "",
    flightNumber: "",
    time: "",
    date: "",
    hotelSelect: "",
    pickUpLocation: "",
    dropOffLocation: "",
    pickUpZone: "",
    dropOffZone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        title={data.allContentfulTransferPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulTransferPageContent.edges[0].node.description
            .description
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-2xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <Form
        data={data.allContentfulTransferPageContent.edges[0].node.airportPhoto}
        formData={formData}
        setFormData={setFormData}
        hotels={data.allContentfulHotelList.edges}
        handleSubmit={handleSubmit}
      />
      <VehicleSelect
        formData={formData}
        vehicles={data.allContentfulTransferVehicle.edges}
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
    allContentfulSeo(filter: { page: { eq: "Transfers Punta Cana" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulTransferPageContent(filter: { page: { eq: "Punta Cana" } }) {
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
    allContentfulHotelList {
      edges {
        node {
          zone
          hotelName
        }
      }
    }
    allContentfulTransferVehicle(
      filter: { groundOrAir: { eq: "Ground" } }
      sort: { zone1Price: ASC }
    ) {
      edges {
        node {
          vehicleType
          passengers
          description
          zone1Price
          zone2Price
          zone3Price
          zone4Price
          zone5Price
          vehiclePhoto {
            gatsbyImage(formats: WEBP, width: 400)
            file {
              url
            }
          }
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
        href="https://puntacanatourstore.com/transfers/punta-cana/"
      />
    </>
  );
};

export default Index;

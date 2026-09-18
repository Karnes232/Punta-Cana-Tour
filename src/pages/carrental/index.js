import { services } from "../../data/travel-services";
import { ServicePlanning } from "../../components/TravelPlanning";
import React, { useState } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import TextComponent from "../../components/TextComponent/TextComponent";
import Form from "../../components/CarRentalComponents/Form";
import CarSelect from "../../components/CarRentalComponents/CarSelect";

const Index = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    startDate: "",
    endDate: "",
    carType: "",
  });

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
        title={services.cars.title}
        heading="h1"
        paragraph={
          data.allContentfulTransferPageContent.edges[0]?.node.description
            .description
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-2xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <ServicePlanning service="cars" />
      <Form
        image={data.allContentfulTransferPageContent.edges[0].node.airportPhoto}
        formData={formData}
        setFormData={setFormData}
      />
      <CarSelect
        cars={data.allContentfulCarRentalCarType.nodes}
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
            gatsbyImage(quality: 80, width: 150, formats: WEBP)
          }
          footerBackground {
            url
            gatsbyImage(quality: 85, width: 1920, formats: WEBP)
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
            gatsbyImage(quality: 80, width: 620, formats: WEBP)
          }
        }
      }
    }
    allContentfulCarRentalCarType(sort: { dailyRate: ASC }) {
      nodes {
        carType
        carModel
        carImage {
          gatsbyImage(quality: 80, width: 500, formats: WEBP, placeholder: DOMINANT_COLOR)
          title
        }
        passengers
        luggage
        gearbox
        dailyRate
        vehicleFeatures
        liabilityStatement {
          liabilityStatement
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

  return (
    <>
      <Seo
        title={services.cars.title}
        description={services.cars.description}
        canonical={"https://puntacanatourstore.com" + services.cars.path}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/carrental/" />
    </>
  );
};

export default Index;

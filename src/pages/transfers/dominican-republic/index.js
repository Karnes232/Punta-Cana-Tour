import React, { useState } from "react";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import { graphql } from "gatsby";
import TextComponent from "../../../components/TextComponent/TextComponent";
import FormDominicanRepublic from "../../../components/TransferComponents/FormDominicanRepublic";
import VehicleCardCountry from "../../../components/TransferComponents/VehicleCardCountry";

const Index = ({ data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    transferType: "",
    passengerCount: "",
    time: "",
    date: "",
    pickUpLocation: "",
    dropOffLocation: "",
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
        title={data.allContentfulTransferPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulTransferPageContent.edges[0].node.description
            .description
        }
        className="my-5 2xl:mb-2 2xl:mt-10 text-2xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <FormDominicanRepublic
        data={data.allContentfulTransferPageContent.edges[0].node.airportPhoto}
        formData={formData}
        setFormData={setFormData}
        cityList={data.allContentfulCityList.nodes[0].cityList}
      />
      <div className="flex flex-col lg:flex-row lg:flex-wrap max-w-6xl mx-auto justify-center lg:justify-between xl:gap-14 items-center">
        {data.allContentfulTransferVehicle.edges.map((vehicle, index) => {
          return (
            <VehicleCardCountry
              key={index}
              vehicle={vehicle.node}
              formData={formData}
            />
          );
        })}
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
    allContentfulCityList(filter: { page: { eq: "Cities" } }) {
      nodes {
        cityList
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
            gatsbyImage(formats: WEBP, width: 400, placeholder: BLURRED)
            file {
              url
            }
          }
          groundOrAir
        }
      }
    }
    allContentfulTransferPageContent(
      filter: { page: { eq: "Dominican Republic" } }
    ) {
      edges {
        node {
          title
          description {
            description
          }
          airportPhoto {
            title
            gatsbyImage(width: 620, formats: WEBP, placeholder: BLURRED)
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Transfers Dominican Republic" } }) {
      nodes {
        title
        keywords
        description {
          description
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
        href="https://puntacanatourstore.com/transfers/dominican-republic/"
      />
    </>
  );
};

export default Index;

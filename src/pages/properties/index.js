import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import PropertyCard from "../../components/PropertyComonents/PropertyCard";

const Index = ({ data }) => {
  const [forSaleList, setForSaleList] = useState([]);
  const [forRentList, setForRentList] = useState([]);

  const [showedList, setShowedList] = useState([]);

  const [selectedSaleOrRent, setSelectedSaleOrRent] = useState("For Sale");
  const [selectedPropertyType, setSelectedPropertyType] =
    useState("All Properties");
  const saleOrRent = ["For Sale", "For Rent"];
  const propertyType = [
    "All Properties",
    "Villa",
    "House",
    "Apartment",
    "Condo",
  ];

  useEffect(() => {
    const forSalePropertyList = data.allContentfulProperty.edges.filter(
      (property) => {
        if (property.node.saleOrRent === "For Sale") {
          return property;
        }
      },
    );
    const forRentPropertyList = data.allContentfulProperty.edges.filter(
      (property) => {
        if (property.node.saleOrRent === "For Rent") {
          return property;
        }
      },
    );
    setForSaleList(forSalePropertyList.sort(() => Math.random() - 0.5));
    setForRentList(forRentPropertyList.sort(() => Math.random() - 0.5));
    setShowedList(forSalePropertyList.sort(() => Math.random() - 0.5));
  }, []);

  const setFilter = (e) => {
    if (selectedSaleOrRent === e.target.dataset.option) {
      return;
    }
    setSelectedPropertyType("All Properties");
    setSelectedSaleOrRent(e.target.dataset.option);
    if (e.target.dataset.option === "For Sale") {
      setShowedList(forSaleList);
    }
    if (e.target.dataset.option === "For Rent") {
      setShowedList(forRentList);
    }
  };

  const filterPropertyType = (e) => {
    setSelectedPropertyType(e.target.dataset.option);
    if (selectedSaleOrRent === "For Sale") {
      const filteredPropertyList = forSaleList.filter((property) => {
        if (e.target.innerText === "All Properties") {
          return property;
        }
        if (property.node.propertyType === e.target.dataset.option) {
          return property;
        }
      });
      setShowedList(filteredPropertyList.sort(() => Math.random() - 0.5));
    }
    if (selectedSaleOrRent === "For Rent") {
      const filteredPropertyList = forRentList.filter((property) => {
        if (e.target.innerText === "All Properties") {
          return property;
        }
        if (property.node.propertyType === e.target.dataset.option) {
          return property;
        }
      });
      setShowedList(filteredPropertyList.sort(() => Math.random() - 0.5));
    }
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
      <HeroComponent
        imageUrl={
          data.allContentfulPageContent.edges[0].node.mainImage.file.url
        }
        gImage={
          data.allContentfulPageContent.edges[0].node.mainImage.gatsbyImage
        }
        heroText=""
        heroText2=""
        button={false}
      />{" "}
      <TextComponent
        title={data.allContentfulPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <div>
        <nav className="flex flex-row items-center overflow-x-scroll xl:overflow-x-auto whitespace-nowrap mx-5 justify-center">
          {saleOrRent.map((option, index) => {
            let active = "";
            if (option === selectedSaleOrRent) {
              active = "font-extrabold";
            }
            return (
              <button
                key={index}
                data-option={option}
                onClick={setFilter}
                value={option}
                translate="no"
                className={`cursor-pointer no-underline flex items-center px-5 h-10 ${active} transition-all duration-300 translatedText `}
              >
                {option}
              </button>
            );
          })}
        </nav>
        <nav className="flex flex-row items-center overflow-x-scroll xl:overflow-x-auto whitespace-nowrap mx-5 xl:justify-center">
          {propertyType.map((option, index) => {
            let active = "";
            if (option === selectedPropertyType) {
              active = "font-extrabold";
            }
            return (
              <button
                key={index}
                data-option={option}
                onClick={filterPropertyType}
                value={option}
                translate="no"
                className={`cursor-pointer no-underline flex items-center px-5 h-10 ${active} transition-all duration-300 translatedText `}
              >
                {option}
              </button>
            );
          })}
        </nav>

        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
          {showedList.map((property, index) => {
            return <PropertyCard property={property.node} key={index} />;
          })}
        </div>
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
    allContentfulProperty {
      edges {
        node {
          title
          urlSlug
          saleOrRent
          propertyType
          price
          generalLocation
          bedrooms
          bathrooms
          squareFeet
          mainImage {
            gatsbyImage(width: 400, formats: WEBP, placeholder: BLURRED)
            title
          }
        }
      }
    }
    allContentfulPageContent(filter: { page: { eq: "Properties Page" } }) {
      edges {
        node {
          title
          paragraph1 {
            paragraph1
          }
          mainImage {
            gatsbyImage(width: 1920, formats: WEBP, placeholder: BLURRED)
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Properties Page" } }) {
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
      <link rel="canonical" href="https://puntacanatourstore.com/properties/" />
    </>
  );
};

export default Index;

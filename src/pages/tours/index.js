import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import TextComponent from "../../components/TextComponent/TextComponent";
import TourCard from "../../components/TourCardComponent/TourCard";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import Seo from "../../components/seo";
import RichTextComponent from "../../components/TextComponent/RichTextComponent";

const Index = ({ data }) => {
  const backendTourList = data.allContentfulTours.edges;
  const [tourList, setTourList] = useState(
    data.allContentfulTours.edges.sort(() => Math.random() - 0.5),
  );
  const [selectedCategory, setSelectedCategory] = useState("All Tours");
  const categories = [
    "All Tours",
    "Water Sports",
    "Land & Adventure",
    "Sightseeing & Cultural",
    "Boat & Yacht",
    "Wellness & Spa",
    "Nightlife",
  ];

  const setFilter = (e) => {
    setSelectedCategory(e.target.dataset.category);
    const filteredTourList = backendTourList.filter((tour) => {
      if (e.target.innerText === "All Tours") {
        return tour;
      }
      const categoryList = tour.node.category;
      return categoryList.includes(e.target.dataset.category);
    });
    setTourList(filteredTourList.sort(() => Math.random() - 0.5));
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
      />

      <TextComponent
        title={data.allContentfulPageContent.edges[0].node.title}
        className="my-5 2xl:my-2 text-3xl md:text-4xl"
      />
      <RichTextComponent
        context={data.allContentfulPageContent.edges[0].node.body}
      />
      <div>
        <nav className="flex flex-row items-center overflow-x-scroll xl:overflow-x-auto whitespace-nowrap mx-5 xl:justify-center">
          {/* <button onClick={()=>setFilter('All')}>All</button> */}
          {categories.map((category, index) => {
            let active = "";
            if (category === selectedCategory) {
              active = "font-extrabold";
            }
            return (
              <button
                key={index}
                data-category={category}
                onClick={setFilter}
                value={category}
                translate="no"
                className={`cursor-pointer no-underline flex items-center px-5 h-10 ${active} transition-all duration-300 translatedText `}
              >
                {category}
              </button>
            );
          })}
        </nav>
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto">
          {tourList.map((tour, index) => {
            return <TourCard tour={tour} key={index} />;
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
    allContentfulTours {
      edges {
        node {
          url
          name
          price
          category
          mainImage {
            gatsbyImage(width: 400, formats: WEBP)
            file {
              url
            }
          }
          description1 {
            description1
          }
        }
      }
    }
    allContentfulPageContent(filter: { page: { eq: "Tour Page" } }) {
      edges {
        node {
          title
          body {
            raw
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
    allContentfulSeo(filter: { page: { eq: "Tours Page" } }) {
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
      <link rel="canonical" href="https://puntacanatourstore.com/tours/" />
    </>
  );
};

export default Index;

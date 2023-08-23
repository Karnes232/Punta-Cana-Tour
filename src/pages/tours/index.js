import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import TextComponent from "../../components/TextComponent/TextComponent";
import TourCard from "../../components/TourCardComponent/TourCard";
import HeroComponent from "../../components/HeroComponent/HeroComponent";


const Index = ({ data }) => {
  const backendTourList = data.allContentfulTour.edges
  const [tourList, setTourList] = useState(data.allContentfulTour.edges.sort(() => Math.random() - 0.5));
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
    console.log(e)
    setSelectedCategory(e.target.dataset.category)
    const filteredTourList = backendTourList.filter(tour => {
      if (e.target.innerText === "All Tours") {
        return tour
      }
      const categoryList = tour.node.category
    return categoryList.includes(e.target.dataset.category)
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
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
    >
      <HeroComponent
        imageUrl={
          data.allContentfulTourPageContent.edges[0].node.mainImage.file.url
        }
        gImage={
          data.allContentfulTourPageContent.edges[0].node.mainImage.gatsbyImage
        }
        heroText=""
        heroText2=""
        button={false}
      />

      <TextComponent
        title={data.allContentfulTourPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulTourPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2"
        pClassName="mb-4 lg:mb-0"
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
        }
      }
    }
    allContentfulTour {
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
    allContentfulTourPageContent {
      edges {
        node {
          mainImage {
            gatsbyImage(width: 1920, formats: WEBP)
            file {
              url
            }
          }
          title
          paragraph1 {
            paragraph1
          }
        }
      }
    }
  }
`;

export const Head = () => <title>Tour Page</title>;

export default Index;

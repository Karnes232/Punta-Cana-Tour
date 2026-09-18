import { services } from "../../data/travel-services";
import { ServicePlanning } from "../../components/TravelPlanning";
import React, { useState } from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import TextComponent from "../../components/TextComponent/TextComponent";
import HotelCard from "../../components/HotelComponents/HotelCard";
import RichTextComponent from "../../components/TextComponent/RichTextComponent";

const Index = ({ data }) => {
  const backendHotelList = data?.allContentfulHotelsOrHostel?.edges;
  const [hotelList, setHotelList] = useState(
    [...data.allContentfulHotelsOrHostel.edges],
  );
  const [selectedCategory, setSelectedCategory] = useState("All Hotels");
  const categories = [
    "All Hotels",
    "Luxury Hotel",
    "All-Inclusive Resort",
    "Business Hotel",
    "Hostel",
  ];

  const setFilter = (e) => {
    setSelectedCategory(e.target.dataset.category);
    const filteredHotelList = backendHotelList.filter((hotel) => {
      if (e.target.innerText === "All Hotels") {
        return hotel;
      }
      const categoryList = hotel.node.hotelType;
      return categoryList.includes(e.target.dataset.category);
    });
    setHotelList(filteredHotelList.sort(() => Math.random() - 0.5));
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
        title={services.hotels.title}
        heading="h1"
        className="my-5 2xl:my-2 text-3xl md:text-4xl"
      />
      <ServicePlanning service="hotels" />
      <RichTextComponent
        context={data.allContentfulPageContent.edges[0].node.body}
      />
      <nav className="flex flex-row items-center overflow-x-scroll xl:overflow-x-auto whitespace-nowrap mx-5 lg:justify-center">
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
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly max-w-5xl xl:max-w-6xl mx-auto gap-8">
        {hotelList.map((hotel, index) => {
          return <HotelCard hotel={hotel.node} key={index} />;
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
    allContentfulHotelsOrHostel {
      edges {
        node {
          title
          urlSlug
          hotelType
          generalLocation
          mainImage {
            gatsbyImage(quality: 85, width: 2000, formats: WEBP, placeholder: DOMINANT_COLOR)
            title
            url
          }
          images {
            title
            gatsbyImage(quality: 80, width: 400, formats: WEBP, placeholder: DOMINANT_COLOR)
          }
          hotel_room {
            price
          }
        }
      }
    }
    allContentfulPageContent(filter: { page: { eq: "Hotels Page" } }) {
      edges {
        node {
          title
          body {
            raw
          }
          mainImage {
            gatsbyImage(quality: 85, width: 1920, formats: WEBP, placeholder: DOMINANT_COLOR)
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Hotels Page" } }) {
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
        title={services.hotels.title}
        description={services.hotels.description}
        canonical={"https://puntacanatourstore.com" + services.hotels.path}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/hotels/" />
    </>
  );
};

export default Index;

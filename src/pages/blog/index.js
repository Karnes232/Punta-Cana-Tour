import React from "react";
import { categoryBySlug } from "../../data/blog-categories";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BlogCategory from "../../components/BlogComponents/BlogCategory";
import TextComponent from "../../components/BlogComponents/TextComponent";
import TravelTopics from "../../components/BlogComponents/TravelTopics";

const index = ({ data }) => {
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
        gImage={data.allContentfulBlogLayout.nodes[0].mainImage.gatsbyImage}
        heroText="Punta Cana Travel Guides"
        button={false}
      />
      <TextComponent
        paragraph={
          data.allContentfulBlogLayout.nodes[0].mainDescription.mainDescription
        }
        pClassName="my-2 2xl:my-10"
      />
      <TravelTopics />
      <div className="flex flex-col xl:mt-5 md:flex-row md:flex-wrap md:justify-evenly  max-w-5xl xl:max-w-6xl mx-auto md:gap-5">
        <BlogCategory
          title="Tour Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].tourBlogImage}
          url="tours"
        />
        <BlogCategory
          title="Transfer Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].transferBlogImage}
          url="transfer"
        />
        <BlogCategory
          title="Hotel Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].hotelBlogImage}
          url="hotel"
        />
        <BlogCategory
          title="Car Rental Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].carRentalBlogImage}
          url="carrental"
        />
        <BlogCategory
          title="Flights Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].flightsBlogImage}
          url="flights"
        />
        <BlogCategory
          title="Property Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].propertyBlogImage}
          url="property"
        />
        <BlogCategory
          title="Attractions Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].attractionsBlogImage}
          url="attractions"
        />
        <BlogCategory
          title="Restaurant Guides"
          gImage={data.allContentfulBlogLayout.nodes[0].resturantBlogImage}
          url="restaurants"
        />
        <BlogCategory
          title="Famous Places Blogs"
          gImage={
            data.allContentfulBlogLayout.nodes[0].famousDominicanPlacesImage
          }
          url="places"
        />
        <BlogCategory
          title="Local Business Blogs"
          gImage={data.allContentfulBlogLayout.nodes[0].localBusinessImage}
          url="local-business"
        />
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
    allContentfulBlogLayout {
      nodes {
        page
        mainDescription {
          mainDescription
        }
        mainImage {
          gatsbyImage(quality: 85, formats: WEBP, placeholder: DOMINANT_COLOR, width: 2000)
        }
        tourBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        transferBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        hotelBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        carRentalBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        flightsBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        propertyBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        attractionsBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        resturantBlogImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        famousDominicanPlacesImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
        localBusinessImage {
          gatsbyImage(quality: 80, formats: WEBP, placeholder: DOMINANT_COLOR, width: 400)
        }
      }
    }
    allContentfulSeo(filter: { page: { eq: "Blog Page" } }) {
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
  const { title, description } = categoryBySlug("");
  return (
    <>
      <Seo title={title} description={description} />
      <link rel="canonical" href="https://puntacanatourstore.com/blog/" />
    </>
  );
};

export default index;

import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Seo from "../../components/seo";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import BlogCategory from "../../components/BlogComponents/BlogCategory";
import TextComponent from "../../components/BlogComponents/TextComponent";

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
        heroText="Blog Posts"
        button={false}
      />
      <TextComponent
        paragraph={
          data.allContentfulBlogLayout.nodes[0].mainDescription.mainDescription
        }
        pClassName="my-2 2xl:my-10"
      />
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
          title="Resturants Blogs"
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
    allContentfulBlogLayout {
      nodes {
        page
        mainDescription {
          mainDescription
        }
        mainImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 2000)
        }
        tourBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        transferBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        hotelBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        carRentalBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        flightsBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        propertyBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        attractionsBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        resturantBlogImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        famousDominicanPlacesImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
        }
        localBusinessImage {
          gatsbyImage(formats: WEBP, placeholder: BLURRED, width: 400)
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
  const { title, description, keywords } = data.allContentfulSeo.nodes[0];
  return (
    <>
      <Seo
        title={title}
        description={description.description}
        keywords={keywords.join(", ")}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/blog/" />
    </>
  );
};

export default index;

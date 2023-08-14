import * as React from "react";
import Layout from "../components/layout";
import HeroComponet from "../components/HeroComponent/HeroComponet";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel";
import { graphql } from "gatsby";
import FeaturedTours from "../components/FeaturedToursComponent/FeaturedTours";
import HeroComponent from "../components/HeroComponent/HeroComponent";

const IndexPage = ({ data }) => {
  const tourList = Array.from(data.allContentfulTour.edges, (x) => x);
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
          data.allContentfulIndexPageContent.edges[0].node.indexHero.url
        }
        gImage={
          data.allContentfulIndexPageContent.edges[0].node.indexHero.gatsbyImage
        }
        heroText={data.allContentfulIndexPageContent.edges[0].node.heroText1}
        heroText2={data.allContentfulIndexPageContent.edges[0].node.heroText2}
        button={true}
      />
      <TextComponent
        title={data.allContentfulIndexPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph2.paragraph2
        }
      />
      <SwiperCarousel
        className="mt-5"
        photoList={
          data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
        }
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph3.paragraph3
        }
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph4.paragraph4
        }
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph5.paragraph5
        }
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph6.paragraph6
        }
        pClassName="mb-4 lg:mb-0"
      />
      <FeaturedTours tours={tourList} />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph7.paragraph7
        }
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph8.paragraph8
        }
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulIndexPageContent {
      edges {
        node {
          title
          paragraph1 {
            paragraph1
          }
          paragraph2 {
            paragraph2
          }
          paragraph3 {
            paragraph3
          }
          paragraph4 {
            paragraph4
          }
          paragraph5 {
            paragraph5
          }
          paragraph6 {
            paragraph6
          }
          paragraph7 {
            paragraph7
          }
          paragraph8 {
            paragraph8
          }
          indexHero {
            url
            gatsbyImage(width: 1920, formats: WEBP)
          }
          heroText1
          heroText2
        }
      }
    }
    allContentfulSwiperPhotoCarousel(filter: { page: { eq: "Index" } }) {
      edges {
        node {
          photoList {
            title
            gatsbyImage(width: 1920, formats: WEBP)
            url
          }
        }
      }
    }
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
    allContentfulTour(filter: { featured: { eq: true } }) {
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
  }
`;

export const Head = () => <title>Home Page</title>;

export default IndexPage;

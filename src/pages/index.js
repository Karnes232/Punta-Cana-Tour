import * as React from "react";
import Layout from "../components/layout";
import HeroComponet from "../components/HeroComponent/HeroComponet";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel";
import { graphql } from "gatsby";
import FeaturedTours from "../components/FeaturedToursComponent/FeaturedTours";

const IndexPage = ({ data }) => {
  return (
    <Layout
      logo={data.allContentfulIndexPageImages.edges[0].node.logo.url}
      footerBackground={
        data.allContentfulIndexPageImages.edges[0].node.footerBackground.url
      }
    >
      <HeroComponet
        image={data.allContentfulIndexPageImages.edges[0].node.indexHero.url}
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
      <FeaturedTours tours={data.allContentfulTour.edges} />
      <section className="h-screen"></section>
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
        }
      }
    }
    allContentfulSwiperPhotoCarousel {
      edges {
        node {
          photoList {
            url
          }
        }
      }
    }
    allContentfulIndexPageImages {
      edges {
        node {
          footerBackground {
            url
          }
          indexHero {
            url
          }
          logo {
            url
          }
        }
      }
    }
    allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          url
          name
          price
          mainImage {
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

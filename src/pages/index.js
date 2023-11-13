import * as React from "react";
import Layout from "../components/layout";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel";
import { graphql } from "gatsby";
import FeaturedTours from "../components/FeaturedToursComponent/FeaturedTours";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import { schema } from "../data/schema";
import Seo from "../components/seo";
import CtaButton from "../components/CtaButton/CtaButton";
import FaqsComponent from "../components/FaqsComponent/FaqsComponent";
import HowItWorks from "../components/HowItWorksComponent/HowItWorks";

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
      whatsApp={data.allContentfulLayout.edges[0].node.whatsApp}
      email={data.allContentfulLayout.edges[0].node.email}
      gImage={
        data.allContentfulLayout.edges[0].node.footerBackground.gatsbyImage
      }
      color="black"
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
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph2.paragraph2
        }
        pClassName="2xl:mb-10"
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
        className="mt-5 2xl:mt-10"
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
        pClassName="mb-4 2xl:mb-10"
      />
      <FeaturedTours tours={tourList} link="/tours/" />
      <TextComponent
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph7.paragraph7
        }
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <FaqsComponent faqs={data.allContentfulFaqsComponent.edges[0].node} />
      <TextComponent
        title={data.allContentfulIndexPageContent.edges[0].node.whyUs}
        paragraph={
          data.allContentfulIndexPageContent.edges[0].node.paragraph8.paragraph8
        }
        className="mt-5 mb-2 text-2xl md:text-3xl"
        pClassName="mb-4 2xl:mb-10"
      />
      <CtaButton text="Book Now" link="/tours/" />
      <HowItWorks data={data.allContentfulHowItWorksComponent.edges[0].node} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulIndexPageContent {
      edges {
        node {
          title
          whyUs
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
          whatsApp
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
    allContentfulSeo(filter: { page: { eq: "Index" } }) {
      nodes {
        title
        keywords
        description {
          description
        }
      }
    }
    allContentfulFaqsComponent {
      edges {
        node {
          question1
          answer1 {
            answer1
          }
          question2
          answer2 {
            answer2
          }
          question3
          answer3 {
            answer3
          }
        }
      }
    }
    allContentfulHowItWorksComponent {
      edges {
        node {
          step1Title
          step1Description {
            step1Description
          }
          step1Image {
            gatsbyImage(width: 150, formats: WEBP)
          }
          step2Title
          step2Description {
            step2Description
          }
          step2Image {
            gatsbyImage(width: 150, formats: WEBP)
          }
          step3Title
          step3Description {
            step3Description
          }
          step3Image {
            gatsbyImage(width: 150, formats: WEBP)
          }
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
        schemaMarkup={schema}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/" />
    </>
  );
};

export default IndexPage;

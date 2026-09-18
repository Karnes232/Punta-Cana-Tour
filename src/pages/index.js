import * as React from "react";
import Layout from "../components/layout";
import TextComponent from "../components/TextComponent/TextComponent";
import SwiperCarousel from "../components/BackgroundCarousel/SwiperCarousel";
import { graphql } from "gatsby";
import FeaturedTours from "../components/FeaturedToursComponent/FeaturedTours";
import HeroComponent from "../components/HeroComponent/HeroComponent";
import { homeSchema } from "../utils/service-schema";
import { home, homeFaqs } from "../data/travel-services";
import TravelPlanning from "../components/TravelPlanning";
import Seo from "../components/seo";
import CtaButton from "../components/CtaButton/CtaButton";
import FaqsComponent from "../components/FaqsComponent/FaqsComponent";
import HowItWorks from "../components/HowItWorksComponent/HowItWorks";

const IndexPage = ({ data }) => {
  const tourList = Array.from(data.allContentfulTours.edges, (x) => x);
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
        heroText="Punta Cana Tours & Travel Guide"
        heroText2="Discover. Plan. Explore."
        button={true}
      />
      <TravelPlanning />
      <TextComponent
        title="Find things to do that fit your itinerary"
        heading="h2"
        className="my-5 2xl:mb-2 2xl:mt-10 text-3xl md:text-4xl"
      />
      <TextComponent
        paragraph="Explore island trips, boat outings, snorkeling, buggy adventures and cultural visits. Choose the experience first, then check travel time from your accommodation, the activity requirements and the full itinerary. Leave room in your schedule for arrival, departure and changes in weather."
      />

      <SwiperCarousel
        className="my-5 2xl:mb-10"
        photoList={
          data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
        }
      />
      <TextComponent
        paragraph="Browse the featured excursions below and open each trip for its details. Compare what is included and confirm your pickup location before booking. If you are still deciding, the travel guides explain how different experiences fit into a Punta Cana visit."
      />

      <FeaturedTours tours={tourList} link="/tours/" />
      <TextComponent
        paragraph="Your accommodation and transport shape the rest of your holiday. Check the location of a hotel or hostel, your arrival time and the journeys you expect to make before deciding between arranged transfers and a rental car. For a longer stay, ask about the specific rental terms of any property you are considering."
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <FaqsComponent faqs={homeFaqs} />
      <TextComponent
        title="Make informed choices before you travel"
        heading="h2"
        paragraph="Use our guides to understand your options, then review the details of the service you want to book. For questions about your itinerary, contact Punta Cana Tour Store with your travel dates, accommodation and group requirements so we can help you identify the next step."
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
          body1 {
            raw
          }
          body2 {
            raw
          }
          paragraph7 {
            paragraph7
          }
          paragraph8 {
            paragraph8
          }
          indexHero {
            url
            gatsbyImage(quality: 85, width: 1920, formats: WEBP)
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
            gatsbyImage(quality: 85, width: 1920, formats: WEBP)
            url
          }
        }
      }
    }
    allContentfulLayout {
      edges {
        node {
          logo {
            url
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
    allContentfulTours(filter: { featured: { eq: true } }) {
      edges {
        node {
          url
          name
          price
          category
          mainImage {
            gatsbyImage(quality: 80, width: 400, formats: WEBP)
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
            gatsbyImage(quality: 80, width: 150, formats: WEBP)
          }
          step2Title
          step2Description {
            step2Description
          }
          step2Image {
            gatsbyImage(quality: 80, width: 150, formats: WEBP)
          }
          step3Title
          step3Description {
            step3Description
          }
          step3Image {
            gatsbyImage(quality: 80, width: 150, formats: WEBP)
          }
        }
      }
    }
  }
`;

export const Head = ({ data }) => {

  return (
    <>
      <Seo
        title={home.title}
        description={home.description}
        canonical="https://puntacanatourstore.com/"
        image={data.allContentfulIndexPageContent.edges[0].node.indexHero.url}
        schemaMarkup={homeSchema(data.allContentfulLayout.edges[0].node)}
      />
      <link rel="canonical" href="https://puntacanatourstore.com/" />
    </>
  );
};

export default IndexPage;

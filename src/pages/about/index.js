import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import TextComponent from "../../components/TextComponent/TextComponent";
import SwiperCarousel from "../../components/BackgroundCarousel/SwiperCarousel";
import HeroComponent from "../../components/HeroComponent/HeroComponent";
import Seo from "../../components/seo";
import RichTextComponent from "../../components/TextComponent/RichTextComponent";
import Video from "../../components/TourPageComponents/Video";
const index = ({ data }) => {
  console.log(data.allContentfulAboutPageContent.edges[0].node.videoUrl);
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
          data.allContentfulAboutPageContent.edges[0].node.aboutHero.file.url
        }
        gImage={
          data.allContentfulAboutPageContent.edges[0].node.aboutHero.gatsbyImage
        }
        heroText={data.allContentfulAboutPageContent.edges[0].node.heroText1}
        heroText2={data.allContentfulAboutPageContent.edges[0].node.heroText2}
        button={false}
      />

      <TextComponent
        title={data.allContentfulAboutPageContent.edges[0].node.title}
        heading="h2"
        className="my-5 2xl:my-2 text-3xl md:text-4xl"
      />
      <RichTextComponent
        context={data.allContentfulAboutPageContent.edges[0].node.body1}
      />

      {data.allContentfulAboutPageContent.edges[0].node.videoUrl ? (
        <div className="mb-5">
          <Video
            url={data.allContentfulAboutPageContent.edges[0].node.videoUrl}
          />
        </div>
      ) : (
        <></>
      )}

      {/* <SwiperCarousel
        className="my-5"
        photoList={
          data.allContentfulSwiperPhotoCarousel.edges[0].node.photoList
        }
      /> */}
      <RichTextComponent
        context={data.allContentfulAboutPageContent.edges[0].node.body2}
      />
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
    allContentfulAboutPageContent {
      edges {
        node {
          title
          body1 {
            raw
          }
          body2 {
            raw
          }
          heroText1
          heroText2
          videoUrl
          aboutHero {
            gatsbyImage(width: 1920, formats: WEBP)
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSwiperPhotoCarousel(filter: { page: { eq: "About" } }) {
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
    allContentfulSeo(filter: { page: { eq: "About" } }) {
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
      <link rel="canonical" href="https://puntacanatourstore.com/about/" />
    </>
  );
};

export default index;

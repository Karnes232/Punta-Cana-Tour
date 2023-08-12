import React from 'react'
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import HeroComponet from '../../components/HeroComponent/HeroComponet';
import TextComponent from '../../components/TextComponent/TextComponent';
import SwiperCarousel from '../../components/BackgroundCarousel/SwiperCarousel';
const index = ({ data }) => {
  
  return (
    <Layout
      logo={data.allContentfulIndexPageImages.edges[0].node.logo.gatsbyImage}
      footerBackground={
        data.allContentfulIndexPageImages.edges[0].node.footerBackground.url
      }
      facebook={data.allContentfulIndexPageImages.edges[0].node.facebook}
      instagram={data.allContentfulIndexPageImages.edges[0].node.instagram}
      email={data.allContentfulIndexPageImages.edges[0].node.email}
    >
    <HeroComponet
       image={data.allContentfulAboutPageContent.edges[0].node.aboutHero.file.url}
        heroText={data.allContentfulAboutPageContent.edges[0].node.heroText1}
        heroText2={data.allContentfulAboutPageContent.edges[0].node.heroText2}
      />
      <TextComponent
        title={data.allContentfulAboutPageContent.edges[0].node.title}
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph1.paragraph1
        }
        className="my-5 2xl:my-2"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph2.paragraph2
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
          data.allContentfulAboutPageContent.edges[0].node.paragraph3.paragraph3
        }
        className="mt-5"
        pClassName="mb-4 lg:mb-0"
      />
      <TextComponent
        paragraph={
          data.allContentfulAboutPageContent.edges[0].node.paragraph4.paragraph4
        }
      />
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulIndexPageImages {
      edges {
        node {
          email
          facebook
          instagram
          footerBackground {
            gatsbyImageData(width: 1920)
            url
          }
          logo {
            gatsbyImage(formats: WEBP, width: 150)
            url
          }
        }
      }
    }
    allContentfulAboutPageContent {
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
          heroText1
          heroText2
          aboutHero {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulSwiperPhotoCarousel(filter: {page: {eq: "About"}}) {
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
  }
`;

export const Head = () => <title>About Page</title>;

export default index